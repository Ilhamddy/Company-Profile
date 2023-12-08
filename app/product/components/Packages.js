import React from "react";
import { TbCubeSend } from "react-icons/tb";
import { SiConsul, SiHomeassistantcommunitystore } from "react-icons/si";
import { GoCrossReference } from "react-icons/go";
import { GiCargoCrate } from "react-icons/gi";
import { FaShopify } from "react-icons/fa";
import { contentfullConfig } from "@/utils/config";
import NewsProduct from "./NewsProduct";

const { baseUrlNews, spaceId, accessToken, environmentId } = contentfullConfig;

const getEntries = async () => {
  const response = await fetch(
    `${baseUrlNews}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=blog`,
    // `${baseUrlNews}/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}&content_type=blog&order=fields.slug=${slug}`,
    { cache: "no-store" },
  );
  return response.json();
  // console.log(response.json());
};

const Packages = async () => {
  const entries = await getEntries();
  // console.log(entries.items);

  return (
    <div className="mx-0 py-10 md:mx-10" id="product">
      {/* document packages */}
      <div className="p-5">
        <h1 className=" text-5xl font-extrabold">Document and Packages</h1>
      </div>
      <div className="  py-10">
        <div className="grid grid-cols-1 gap-4 rounded-md bg-sky-100 p-5 md:grid-cols-4">
          {/*product */}
          <div className="col-span-2 items-center  md:items-center">
            <div className="flex items-center text-center text-xl font-semibold md:text-justify md:text-2xl">
              <TbCubeSend size={35} className="m-2" color="primary" />
              Technology-Driven Tracking
            </div>
            <hr />
            <div className="my-8  text-center text-xl md:text-justify md:text-sm">
              "Advanced tracking and monitoring systems for real-time
              visibility, enhancing transparency and control over shipments."
            </div>
          </div>
          <div className="col-span-2  items-center  md:items-center">
            <div className="flex items-center text-center text-xl font-semibold md:text-justify md:text-2xl">
              <SiHomeassistantcommunitystore size={35} className="m-2" />
              Warehousing and Distribution
            </div>
            <hr />
            <div className="my-8 text-center text-xl md:text-justify md:text-sm">
              "Secure warehousing facilities and distribution services to
              streamline inventory management and distribution processes"
            </div>
          </div>
          {/*product */}

          <div className="col-span-2  items-center  md:items-center">
            <div className="flex items-center text-center text-xl font-semibold md:text-justify md:text-2xl">
              <GoCrossReference size={35} className="m-2" color="primary" />
              Cross-Border Logistics
            </div>
            <hr />
            <div className="my-8  text-center text-xl md:text-justify md:text-sm">
              "Expertise in managing cross-border logistics, facilitating smooth
              and compliant transportation of goods across international
              borders."
            </div>
          </div>
          <div className="col-span-2  items-center  md:items-center">
            <div className="flex items-center text-center text-xl font-semibold md:text-justify md:text-2xl">
              <SiConsul size={35} className="m-2" />
              Sustainability Consulting
            </div>
            <hr />
            <div className="my-8 text-center text-xl md:text-justify md:text-sm">
              "Consultation services to help clients implement sustainable
              practices, including eco-friendly shipping methods and carbon
              offset programs"
            </div>
          </div>
          {/*product */}

          <div className="col-span-2  items-center  md:items-center">
            <div className="flex items-center text-center text-xl font-semibold md:text-justify md:text-2xl">
              <GiCargoCrate size={35} className="m-2" color="primary" />
              Project Cargo Management
            </div>
            <hr />
            <div className="my-8  text-center text-xl md:text-justify md:text-sm">
              "Specialized project cargo management for complex and large-scale
              shipments, ensuring meticulous planning and execution."
            </div>
          </div>
          <div className="col-span-2  items-center  md:items-center">
            <div className="flex items-center text-center text-xl font-semibold md:text-justify md:text-2xl">
              <FaShopify size={35} className="m-2" />
              E-commerce Fulfillment
            </div>
            <hr />
            <div className="my-8 text-center text-xl md:text-justify md:text-sm">
              "End-to-end fulfillment services for e-commerce businesses,
              including order processing, packaging, and shipping to enhance
              customer satisfaction"
            </div>
          </div>
        </div>
      </div>
      {/* card */}
      <div>
        {/* card */}
        <div className="grid grid-cols-1 p-5 md:grid-cols-4">
          <div className="col-span-3 text-center text-3xl font-extrabold md:text-start md:text-6xl">
            The latest articles and industry insights
          </div>
          <div className="flex items-end justify-end text-blue-600 underline underline-offset-1">
            {" "}
            View All
          </div>
        </div>
        <div>
          <div className=" grid grid-cols-1 md:grid-cols-3">
            {entries.items.map((entry, index) => {
              return <NewsProduct key={index} data={entry} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Packages;
