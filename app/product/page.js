import React from "react";
import ProductImage from "./components/ProductImage";
import Tranportation from "./components/Tranportation";
import ProductPower from "./components/ProductPower";
import Packages from "./components/Packages";
import ProductServices from "./components/ProductServices";
import NewsProduct from "./components/NewsProduct";
import { contentfullConfig } from "@/utils/config";

const { baseUrlNews, spaceId, accessToken, environmentId } = contentfullConfig;

const getEntries = async () => {
  const response = await fetch(
    `${baseUrlNews}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=blog&order=fields.createdAt`,
    { cache: "no-store" },
  );
  return response.json();
  // console.log(response.json());
};

const Product = async () => {
  const entries = await getEntries();
  // console.log(entries.items);
  return (
    <section className="max-h-full  max-w-full md:h-full md:w-full">
      <ProductImage />
      <Tranportation />
      <Packages />
      <ProductServices />
      <div>
        <div className="mx-0 py-10 md:mx-10">
          <div className="grid grid-cols-1 p-5 md:grid-cols-4">
            <div className="col-span-3 text-center text-3xl font-extrabold md:text-start md:text-6xl">
              The latest articles and industry insights
            </div>
            <div className="flex items-end justify-end text-blue-600 underline underline-offset-1">
              {" "}
              View All
            </div>
          </div>
          <div className="mb-10 grid grid-cols-1  md:grid-cols-3 ">
            {entries.items.map((entry, index) => {
              return <NewsProduct key={index} data={entry} />;
            })}
          </div>
        </div>
      </div>
      <ProductPower />
    </section>
  );
};

export default Product;
