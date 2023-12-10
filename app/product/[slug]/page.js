import { contentfullConfig } from "@/utils/config";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { format } from "date-fns";
import Image from "next/image";
import React, { Children } from "react";
import { BLOCKS } from "@contentful/rich-text-types";
import { Badge } from "flowbite-react";
import { getEntriesBySlug } from "@/utils/contentfull";

const DetailBlog = async ({ params }) => {
  const entry = await getEntriesBySlug(params.slug);
  // console.log(entry.items[0].fields.content);
  // console.log(entry.items[0].fields.thumbnail.sys.id);
  // console.log(entry.includes.Asset);

  const date = format(
    new Date(entry.items[0].fields.createdAt),
    "dd MMMM yyyy",
  );
  const idAsset = entry.items[0].fields.thumbnail.sys.id;
  const assets = entry.includes.Asset;
  const thumbnail = assets.find((asset) => asset.sys.id === idAsset);

  const idCategory = entry.items[0].fields.category.sys.id;
  const categories = entry.includes.Entry;
  const category = categories.find(
    (category) => category.sys.id === idCategory,
  );

  // console.log(thumbnail);

  const RICHTEXT_OPTIONS = {
    renderNode: {
      [BLOCKS.HEADING_2]: (node, children) => {
        return <h2 className="text-xl font-extrabold italic">{children}</h2>;
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <h2 className="font-light ">{children}</h2>;
      },
    },
  };

  return (
    <div>
      <div className="mx-0 py-10 md:mx-10">
        <div className="bg-grey.100 grid grid-cols-1 p-5 md:grid-cols-4">
          <div className="col-span-2 flex flex-col items-center justify-center p-8">
            <div className="text-center text-xl font-extrabold md:text-start md:text-2xl"></div>
            <div className="pt-20 text-justify ">
              <div className="flex flex-wrap gap-2 text-center text-[25px] font-bold italic">
                <Badge href="#">{category.fields.title}</Badge>
                <Badge>{date}</Badge>
                <h1> {entry.items[0].fields.title}</h1>
              </div>

              <div className="text-[]26px">
                {" "}
                {entry.items[0].fields.description}
              </div>
              <p className="mt-12">content</p>
              <div>
                {documentToReactComponents(
                  entry.items[0].fields.content,
                  RICHTEXT_OPTIONS,
                )}
              </div>
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-center md:items-center">
            {" "}
            <Image
              alt="thumnaild"
              className="h-screen w-fit"
              width={200}
              height={200}
              src={`https:${thumbnail.fields.file.url}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailBlog;
