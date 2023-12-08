import { contentfullConfig } from "@/utils/config";
import Image from "next/image";
import React from "react";

const { baseUrlNews, spaceId, accessToken, environmentId } = contentfullConfig;

const getEntriesBySlug = async (slug) => {
  const response = await fetch(
    // `${baseUrlNews}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=blog&order=fields.createdAt`,
    `${baseUrlNews}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=blog&order=fields.slug=${slug}`,
    { cache: "no-store" },
  );
  return response.json();
  // console.log(response.json());
};
const DetailBlog = async ({ params }) => {
  const entry = await getEntriesBySlug(params.slug);
  console.log(entry.items);

  return (
    <div>
      {/* {entry.items.map((index) => { */}
      return (
      <div className="mx-0 py-10 md:mx-10">
        <div
          className="grid grid-cols-1 bg-pink p-5 md:grid-cols-4"
          // key={index}
        >
          <div className="col-span-2 flex flex-col items-center justify-center p-8">
            <div className="text-center text-xl font-extrabold md:text-start md:text-2xl"></div>
            <div className="text-center text-xl md:text-justify md:text-2xl">
              {/* {index.fields.description} */}
              <h1 className="font-bold">Tegar ceo binal di follow guys</h1>
            </div>
          </div>
          <div className="col-span-2 flex items-center justify-center md:items-center">
            {" "}
            <Image src={"/bg.png"} width={1280} height={1268} />
          </div>
        </div>
      </div>
      );
      {/* })} */}
    </div>
  );
};

export default DetailBlog;
