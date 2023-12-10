import { format } from "date-fns";
import { Badge } from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsProduct = ({ data, includes }) => {
  const idAsset = data.fields.thumbnail.sys.id;
  const assets = includes.Asset;
  const thumbnail = assets.find((asset) => asset.sys.id === idAsset);

  const idCategory = data.fields.category.sys.id;
  const categories = includes.Entry;
  const category = categories.find(
    (category) => category.sys.id === idCategory,
  );
  const date = format(new Date(data.fields.createdAt), "dd MMMM yyyy");

  console.log("data  news", data.fields.slug);
  return (
    <Link href={`/product/${data.fields.slug}`}>
      <div>
        <div className=" p-2 md:p-3">
          <Image
            src={`https:${thumbnail.fields.file.url}`}
            width="200"
            height={"200"}
            className="m-5 w-full md:mx-7"
          />
          <div className="flex flex-wrap">
            <Badge className="mx-2">{category.fields.title}</Badge>
            <Badge>{date}</Badge>
          </div>
          <div className="mx-5 text-4xl font-bold">{data.fields.title}</div>
          <p className="mx-5 line-clamp-4 text-justify">
            {" "}
            {data.fields.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsProduct;
