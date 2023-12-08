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
      <ProductPower />
    </section>
  );
};

export default Product;
