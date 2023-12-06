import Image from "next/image";
import React from "react";

const Powering = () => {
  return (
    <div className="mx-0 my-10 h-full bg-[#176B87] py-10 md:px-10 ">
      <div className="p-5 text-white">
        <div className="mb-10 text-center md:text-start">
          Industry Knowledge
        </div>
        <div className="text-center text-3xl font-extrabold md:text-start md:text-6xl">
          Powering innovation across industries, globally
        </div>
      </div>
      <div className="mt-12 flex justify-center p-10 md:p-5">
        <Image
          src="/pngegg.png"
          width={1028}
          height={726}
          alt="shipping company"
        />
      </div>
      <div className="grid grid-cols-1 p-5 text-center text-white  md:grid-cols-4">
        <div>
          <div className="text-6xl font-extrabold underline underline-offset-8">
            $5b+
          </div>
          <h4 className="py-5">Equity value</h4>
          <div className="font-extralight">More than $5b USD in equilty</div>
        </div>
        <div>
          <div className="text-6xl font-extrabold underline underline-offset-8 ">
            932
          </div>
          <h4 className="py-5">Venturer</h4>
          <div className="font-extralight">
            We've built, invested in and accelerated hundres of ventures
            globally
          </div>
        </div>
        <div>
          <div className="text-6xl font-extrabold underline underline-offset-8">
            81%
          </div>
          <h4 className="py-5">Succes pilots</h4>
          <div className="font-extralight">
            We have facillities hundreds of pilots between corporates and
            startups with an unmatcheed succes rate
          </div>
        </div>
        <div>
          <div className="text-6xl font-extrabold underline underline-offset-8">
            85+
          </div>
          <h4 className="py-5">Fortune 500 partnerts</h4>
          <div className="font-extralight">
            Working with us to solve big challenge
          </div>
        </div>
      </div>
    </div>
  );
};

export default Powering;
