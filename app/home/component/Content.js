import React from "react";
import { RiTeamFill } from "react-icons/ri";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FiActivity } from "react-icons/fi";
import Link from "next/link";

const Content = () => {
  return (
    <div className="py-10 md:mx-10" id="overview">
      <h1 className="my-10 p-5 text-center text-5xl font-extrabold md:text-start">
        Why Choose Us?
      </h1>
      <div className="m-10 grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-3 ">
        <div className=" text-justfiy">
          <RiTeamFill className="h-20 w-20" />
          <h2 className="py-5 text-2xl font-bold "> History Company</h2>
          <div className="text-justify">
            Generix Express is a global service provider offering tailor-made
            solutions to customers across the world, spanning over 50+ leading
            industries. With a commitment to excellence, Generix Express
            specializes in providing customized services that cater to the
            unique needs and requirements of each client.
          </div>
          <br />
          <button className="rounded-2xl bg-primary p-3 text-xl font-bold text-white">
            <Link href="/about">Learn More</Link>
          </button>
        </div>

        <div>
          <RiCustomerService2Fill className="h-20 w-20" />
          <h2 className="py-5 text-2xl font-bold">Its team</h2>
          <div className="text-justify">
            Our extensive range of services is designed to meet the diverse
            demands of today's dynamic business landscape. Whether you're in
            manufacturing, technology, healthcare, or any other sector, Generix
            Express leverages its expertise to deliver solutions that enhance
            efficiency, streamline processes, and contribute to overall business
            success.
          </div>
          <br />
          <button className="rounded-2xl bg-primary p-3 text-xl font-bold text-white">
            <Link href="/about">Learn More</Link>
          </button>
        </div>

        <div className="text-justfiy">
          <FiActivity className="h-20 w-20" />

          <h2 className="py-5 text-2xl font-bold">Cultures</h2>
          <div className="text-justify">
            At Generix Express, we prioritize customer satisfaction and strive
            to establish long-lasting partnerships. Our team of professionals is
            dedicated to understanding your specific industry challenges,
            allowing us to create personalized strategies that align with your
            goals.
          </div>
          <br />
          <button className="rounded-2xl bg-primary p-3 text-xl font-bold text-white">
            <Link href="/about">Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
