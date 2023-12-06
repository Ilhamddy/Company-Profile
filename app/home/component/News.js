import Image from "next/image";
import React from "react";

const News = () => {
  return (
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
        <div className="p-5">
          <div>
            <div className="mb-10 grid grid-cols-1  md:grid-cols-3">
              <div className="col-span-2 p-2 md:p-3">
                <Image
                  src={"/next.svg"}
                  width="200"
                  height={"200"}
                  className="m-5 w-auto md:mx-7"
                  alt="shipping company"
                />
                News Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quasi, impedit.
              </div>
              <div className="p-2 md:p-3">
                <Image
                  src={"/next.svg"}
                  width="200"
                  height={"200"}
                  className="m-5 w-auto md:mx-7"
                  alt="shipping company"
                />
                News Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quasi, impedit.
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3">
              <div className="p-2 md:p-3">
                <Image
                  src={"/next.svg"}
                  width="200"
                  height={"200"}
                  className="m-5 w-auto md:mx-7"
                  alt="shipping company"
                />
                News Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quasi, impedit.
              </div>
              <div className="p-2 md:p-3">
                <Image
                  src={"/next.svg"}
                  width="200"
                  height={"200"}
                  className="m-5 w-auto md:mx-7"
                  alt="shipping company"
                />
                News Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quasi, impedit.
              </div>
              <div className="p-2 md:p-3">
                <Image
                  src={"/next.svg"}
                  width="200"
                  height={"200"}
                  className="m-5 w-auto md:mx-7"
                  alt="shipping company"
                />
                News Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quasi, impedit.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
