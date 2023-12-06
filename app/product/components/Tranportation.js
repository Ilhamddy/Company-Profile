import Image from "next/image";
import React from "react";

const Tranportation = () => {
  return (
    <div className="mx-0 py-10 md:mx-10">
      <div className="grid grid-cols-1 bg-sky-100 p-5 md:grid-cols-4">
        <div className="col-span-2 flex flex-col items-center justify-center p-8">
          <div className="text-center text-xl font-extrabold md:text-start md:text-2xl">
            The Shipping Services in the world
          </div>
          <div className="text-center text-xl md:text-justify md:text-2xl">
            "Generix Express is committed to delivering a diverse range of
            services, combining industry expertise with cutting-edge technology
            to meet the evolving needs of its clients across the globe."
          </div>
        </div>
        <div className="col-span-2 flex items-center justify-center md:items-center">
          {" "}
          <Image src={"/ship2.jpg"} width={1280} height={1268} />
        </div>
      </div>
    </div>
  );
};

export default Tranportation;
