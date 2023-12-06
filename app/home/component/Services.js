import React from "react";
import { BiSolidShip } from "react-icons/bi";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import { FaCaravan } from "react-icons/fa";
import { FaTruckMoving } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import { GiCargoShip } from "react-icons/gi";
import Link from "next/link";

const Services = () => {
  return (
    <div className=" py-10 md:mx-10" id="product">
      <h1 className="my-10 p-5 text-center text-3xl font-extrabold md:pr-32 md:text-5xl lg:text-start">
        The tools you need to win and keep more clients
      </h1>
      <div className="m-10 grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-3 ">
        <div className=" text-justfiy">
          <BiSolidShip className="h-20 w-20" />
          <h2 className="text py-5 text-2xl font-bold">
            {" "}
            Marine Cargo Services
          </h2>
          <div className="truncate text-justify">
            Generix Express offers reliable and efficient marine cargo services,
            facilitating the transportation of goods by sea. With a global
            network of partners and a fleet of secure vessels, we ensure the
            safe and timely delivery of your cargo, regardless of its size or
            destination.
          </div>
          <br />
          <button className=" rounded-2xl bg-primary p-3 text-xl font-bold text-white">
            <Link href="/product">Learn More</Link>
          </button>
        </div>

        <div>
          <MdOutlineAirplanemodeActive className="h-20 w-20" />
          <h2 className="py-5 text-2xl font-bold">Air Cargo Services</h2>
          <div className="truncate text-justify">
            Our air cargo services are designed for swift and secure
            transportation of goods via airfreight. Leveraging strategic
            partnerships with major airlines, we provide expedited shipping
            options for time-sensitive deliveries. Generix Express ensures that
            your cargo reaches its destination with speed and precision.
          </div>
          <br />
          <button className="rounded-2xl bg-primary p-3 text-xl font-bold text-white">
            <Link href="/product">Learn More</Link>
          </button>
        </div>

        <div className="text-justfiy">
          <FaCaravan className="h-20 w-20" />
          <h2 className="py-5 text-2xl font-bold">Inland Cargo Services</h2>
          <div className="truncate text-justify">
            Generix Express manages comprehensive inland cargo services,
            covering transportation within a country or region. Our dedicated
            fleet and network of reliable carriers ensure seamless connectivity,
            offering door-to-door solutions for your inland transportation
            needs.
          </div>
          <br />
          <button className="rounded-2xl bg-primary p-3 text-xl font-bold text-white">
            <Link href="/product">Learn More</Link>
          </button>
        </div>
      </div>
      <div className="m-10 grid grid-flow-row grid-cols-1 gap-10 md:grid-cols-3 ">
        <div className=" text-justfiy">
          <FaTruckMoving className="h-20 w-20" />
          <h2 className="text py-5 text-2xl font-bold">
            {" "}
            Heavy Equipment Services
          </h2>
          <div className="truncate  text-justify">
            Specializing in the transportation of heavy equipment, Generix
            Express provides specialized services for the safe and efficient
            movement of large machinery. Our experienced team and specialized
            equipment guarantee the secure handling and transport of heavy loads
            to any destination.
          </div>
          <br />
          <button className="rounded-2xl bg-primary p-3 text-xl font-bold text-white">
            <Link href="/product">Learn More</Link>
          </button>
        </div>

        <div>
          <FaCar className="h-20 w-20" />
          <h2 className="truncate py-5 text-2xl font-bold">
            Car Shipping Services{" "}
          </h2>
          <div className="truncate text-justify">
            Generix Express understands the unique requirements of car shipping.
            Whether it's individual vehicles or a fleet, our car shipping
            services offer secure transport, handling, and delivery. We provide
            both domestic and international car shipping solutions, ensuring the
            protection of your valuable assets.
          </div>
          <br />
          <button className="rounded-2xl bg-primary p-3 text-xl font-bold text-white">
            <Link href="/product">Learn More</Link>
          </button>
        </div>

        <div className="text-justfiy">
          <GiCargoShip className="h-20 w-20" />
          <h2 className=" py-5 text-2xl font-bold">Container Sea Cargo</h2>
          <div className="truncate text-justify">
            Our container sea cargo services are tailored to meet the diverse
            shipping needs of various industries. Generix Express efficiently
            manages the loading, unloading, and transportation of containerized
            cargo, optimizing logistics for global trade.
          </div>
          <br />
          <button className="rounded-2xl bg-primary p-3 text-xl font-bold text-white">
            <Link href="/product">Learn More</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
