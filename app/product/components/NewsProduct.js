import Image from "next/image";
import Link from "next/link";
import React from "react";

const NewsProduct = ({ data }) => {
  console.log("data  news", data.fields.slug);
  return (
    <Link href={`/product/${data.fields.slug}`}>
      <div>
        <div className=" p-2 md:p-3">
          <Image
            src={"/ship3.jpg"}
            width="200"
            height={"200"}
            className="m-5 w-full md:mx-7"
          />
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
