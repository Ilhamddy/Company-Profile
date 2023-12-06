import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div className="mx-0 py-10 md:mx-10" id="messages">
      <div className="grid grid-cols-1 bg-sky-100 p-5 md:grid-cols-4">
        <div className="flex items-center justify-center md:items-center">
          {" "}
          <Image
            src={
              "https://img.freepik.com/free-photo/container-ship-unloading-cargo-commercial-dock-generated-by-ai_24640-89673.jpg?t=st=1701179916~exp=1701183516~hmac=03297f2f746a0a4c728631e3fbb20d4d9b890b8b53c2bf82319b6f8893eaa8ad&w=1060"
            }
            width={1280}
            height={1268}
            alt="shipping company"
          />
        </div>
        <div className="col-span-3  p-8">
          <div className="text-center text-xl md:text-justify md:text-2xl">
            "Designspace has consistently delivered above and beyond my
            expectations! Briliant design Work, incredible response time and a
            really friendly team"
          </div>
          <div className="my-4 flex justify-between md:my-2">
            <div className="text-center font-bold">
              Ilham Maulana
              <p className="font-thin">Web Dev </p>
            </div>
            <div className=""> ShippingCompany</div>
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="grid grid-flow-row grid-cols-1 items-center md:grid-cols-4">
          <Image
            src={"/cma.png"}
            width="200"
            height={"200"}
            className="m-5 w-[300px] md:mx-7"
            alt="shipping company"
          />
          <Image
            src={"/evergreen.png"}
            width="200"
            height={"200"}
            className="m-5 w-[300px] md:mx-7"
            alt="shipping company"
          />
          <Image
            src={"/maersk.png"}
            width="200"
            height={"200"}
            className="m-5 w-[300px] md:mx-7"
            alt="shipping company"
          />
          <Image
            src={"/one.png"}
            width="200"
            height={"200"}
            className="m-5 w-[300px] md:mx-7"
            alt="shipping company"
          />
        </div>
      </div>
    </div>
  );
};

export default Partners;
