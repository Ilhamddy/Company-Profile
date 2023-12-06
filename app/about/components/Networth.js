import React from "react";
import Image from "next/image";

const Networth = () => {
  return (
    <div>
      <div className="mx-0 py-10 md:mx-10">
        <div className="grid grid-cols-1 p-5 md:grid-cols-1">
          <div className="text-center text-3xl font-extrabold md:text-start md:text-6xl">
            The latest articles and industry insights
          </div>
        </div>
        <div className="p-5">
          <div>
            <div className="grid grid-cols-1 text-center md:grid-cols-3">
              <div className="p-2 text-justify md:p-3 ">
                {/* <Image src={'/next.svg'} width="200" height={"200"} className='m-5 md:mx-7 w-auto' /> */}
                <div className="my-8 text-xl font-extrabold underline underline-offset-8 md:text-2xl">
                  Founding and Early Years:
                </div>
                <hr />
                Generix Express was founded in 1995 by visionary entrepreneur
                Sarah Mitchell. Fueled by a passion for revolutionizing global
                logistics, Mitchell set out to establish a company that would
                redefine the standards of excellence in the shipping industry.
                Armed with a strong commitment to innovation and customer
                satisfaction, Generix Express started its journey as a
                small-scale logistics firm based in Seattle.
              </div>
              <div className="p-2 text-justify md:p-3 ">
                {/* <Image src={'/next.svg'} width="200" height={"200"} className='m-5 md:mx-7 w-auto' /> */}
                <div className="my-8 text-xl  font-extrabold underline underline-offset-8 md:text-2xl">
                  Early Milestones:
                </div>
                <hr />
                In its early years, Generix Express focused on building a
                reputation for reliability and efficiency in maritime cargo
                services. The company quickly gained recognition for its
                attention to detail and a customer-centric approach. By 2000,
                Generix Express had expanded its services to cover air cargo and
                inland transportation, solidifying its position as a
                comprehensive logistics solution provider.
              </div>
              <div className="p-2 text-justify md:p-3 ">
                {/* <Image src={'/next.svg'} width="200" height={"200"} className='m-5 md:mx-7 w-auto' /> */}
                <div className="my-8 text-xl font-extrabold underline underline-offset-8 md:text-2xl">
                  Global Expansion:
                </div>
                <hr />
                The early 2000s marked a period of rapid global expansion for
                Generix Express. The company strategically established
                partnerships with key players in the shipping industry, enabling
                it to offer seamless and integrated services worldwide. With a
                growing network of offices and agents in major international
                hubs, Generix Express became synonymous with streamlined global
                logistics.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Networth;
