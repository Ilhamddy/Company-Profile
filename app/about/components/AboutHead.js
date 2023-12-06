import React from "react";

const AboutHead = () => {
  return (
    <section className="h-full  bg-myimage bg-cover md:h-screen">
      <div className="px-5 py-28 md:mx-10">
        <div className="grid grid-cols-1 md:h-[500px] md:grid-cols-3">
          <div className="col-span-2 flex p-2 pt-9 text-center  md:p-5 md:text-start">
            <h1 className=" text-5xl font-bold text-white md:text-6xl  ">
              Generix - Supporting your bussines with logistic{" "}
            </h1>
          </div>
          <div className="mx-2 flex ">
            <h1 className="text-md p-0 text-justify font-bold text-white md:p-10">
              At Generix Express, we prioritize customer satisfaction and strive
              to establish long-lasting partnerships. Our team of professionals
              is dedicated to understanding your specific industry challenges.{" "}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHead;
