import { Button } from "flowbite-react";
import { PiMicrosoftTeamsLogo } from "react-icons/pi";

import {
  MdOutlineCorporateFare,
  MdProductionQuantityLimits,
} from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-myimage3 flex h-screen items-center justify-center bg-cover px-5 py-40 md:h-screen md:py-40">
      <div className=" md:mx-10">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
          <div className="item p-2 pt-9 text-center md:p-5 md:text-start">
            <h1 className="text-4xl font-bold text-white md:text-6xl  ">
              We Provide logistic solution tailor made for individual costumer!
            </h1>
          </div>
          <div className="grid-cols-1 md:grid-cols-1">
            <div className="flex flex-col justify-center">
              <div className="m-2 ">
                <h1 className="rounded-md text-justify text-[18px] font-bold text-white md:p-5">
                  Generix Express is a global service provider offering
                  tailor-made solutions to customers across the world, spanning
                  over 50+ leading industries. With a commitment to excellence,
                  Generix Express specializes in providing customized services
                  that cater to the unique needs and requirements of each
                  client.
                </h1>
              </div>
              <div className="m-0 mb-4 flex justify-center p-0 md:m-2 md:justify-start md:p-2">
                <Button.Group>
                  <Button color="gray">
                    <MdOutlineCorporateFare className="m-1" />
                    <a href="#overview"> Overview</a>
                  </Button>
                  <Button color="gray">
                    <MdProductionQuantityLimits className="m-1" />
                    <a href="#product">Product</a>
                  </Button>
                  <Button color="gray">
                    <PiMicrosoftTeamsLogo className="m-1" />
                    <a href="#messages">Messages</a>
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

export default Header;
