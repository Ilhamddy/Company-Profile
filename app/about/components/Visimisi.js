import Image from "next/image";
import React from "react";

const Visimisi = () => {
  return (
    <div className="mx-0 py-10 md:mx-10">
      <div className="grid grid-cols-1 bg-sky-100 p-5 md:grid-cols-4">
        <div className="col-span-2 flex items-center justify-center md:items-center">
          {" "}
          <Image
            src={"/ship3.jpg"}
            alt="shipping company"
            width={1280}
            height={1268}
          />
        </div>
        <div className="col-span-2  p-8">
          <div className="text-center text-xl font-extrabold md:text-start md:text-2xl">
            We are the digital logistic company for indonesia
          </div>
          <div className="text-md text-center md:text-justify md:text-xl">
            "At Generix Express, our vision is to be the undisputed leader in
            global logistics, setting the standard for excellence and
            innovation. We aspire to seamlessly connect the world through
            efficient, sustainable, and customer-centric logistics solutions.
            Through our unwavering commitment to reliability and cutting-edge
            technology, we envision a future where businesses thrive and
            communities prosper, united by the power of seamless global
            connectivity."
          </div>
        </div>
      </div>
    </div>
  );
};

export default Visimisi;
