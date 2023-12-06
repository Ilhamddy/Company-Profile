import { Button } from "flowbite-react";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";

import {
  MdContactMail,
  MdOutlineCorporateFare,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { FaProductHunt } from "react-icons/fa";

const ProductImage = () => {
  return (
    <div className="bg-myimage2 flex h-screen items-center justify-center bg-cover px-5 py-40 md:h-screen md:py-40">
      <div className=" md:mx-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          <div className="item p-2 pt-9 text-center md:p-5 md:text-start">
            <h1 className="text-4xl font-bold text-white md:text-6xl  ">
              Together with our carefully Selected Partner, we offer you global
              service
            </h1>
          </div>
          <div className="grid-cols-1 md:grid-cols-1">
            <div className="flex flex-col justify-center">
              <div className="m-2 ">
                <h1 className="rounded-md text-justify text-[18px] font-bold text-white md:p-5">
                  As a global logistics provider, we recognize our
                  responsibility to the environment. Generix Express is
                  dedicated to sustainable practices, striving to minimize our
                  ecological footprint. From eco-friendly shipping methods to
                  carbon offset programs, we are committed to contributing to a
                  greener, more sustainable world.
                </h1>
              </div>
              <div className="m-0 mb-4 flex justify-center p-0 md:m-2 md:justify-start md:p-2">
                <Button.Group>
                  <Button color="gray">
                    <FaProductHunt className="m-1" />
                    <a href="#product"> Product</a>
                  </Button>
                  <Button color="gray">
                    <MdProductionQuantityLimits className="m-1" />
                    <a href="#services">Services</a>
                  </Button>
                  <Button color="gray">
                    <MdContactMail className="m-1" />
                    <a href="#messages">Contact</a>
                  </Button>
                </Button.Group>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
