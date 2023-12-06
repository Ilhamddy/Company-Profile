import Image from "next/image";
import React from "react";
import { FaUserLarge } from "react-icons/fa6";

const Cultures = () => {
  return (
    <div className="mx-0 py-10 md:mx-10">
      <div className="p-5 text-center">
        <h2 className="py-5 text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Cultures
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4">
          <div className="m-1 items-center rounded-md bg-primary p-5">
            <div class="flex items-center gap-4 py-4">
              <FaUserLarge size={40} color="white" />
              <div>
                <p class="mt-0.5 text-lg font-medium text-white ">Maersk</p>
              </div>
            </div>
            <div className="flex items-end text-justify  text-white underline-offset-1">
              {" "}
              We believe in the power of collaboration. Our team members,
              regardless of their roles or departments, actively engage with one
              another to achieve common goals.
            </div>
          </div>
          <div className="m-1 rounded-md bg-primary p-5">
            <div class="flex items-center gap-4 py-4">
              <FaUserLarge size={40} color="white" />
              <div>
                <p class="mt-0.5 text-lg font-medium text-white ">Evergreen</p>
              </div>
            </div>
            <div className="flex items-end text-justify  text-white underline-offset-1">
              {" "}
              We believe in the power of collaboration. Our team members,
              regardless of their roles or departments, actively engage with one
              another to achieve common goals.
            </div>
          </div>
          <div className="m-1 rounded-md bg-primary p-5">
            <div class="flex items-center gap-4 py-4">
              <FaUserLarge size={40} color="white" />
              <div>
                <p class="mt-0.5 text-lg font-medium text-white ">One</p>
              </div>
            </div>
            <div className="flex items-end text-justify  text-white underline-offset-1">
              {" "}
              We believe in the power of collaboration. Our team members,
              regardless of their roles or departments, actively engage with one
              another to achieve common goals.
            </div>
          </div>
          <div className="m-1 items-center rounded-md bg-primary p-5">
            <div class="flex items-center gap-4 py-4">
              <FaUserLarge size={40} color="white" />
              <div>
                <p class="mt-0.5 text-lg font-medium text-white ">CMA</p>
              </div>
            </div>
            <div className="flex items-end text-justify  text-white underline-offset-1">
              {" "}
              We believe in the power of collaboration. Our team members,
              regardless of their roles or departments, actively engage with one
              another to achieve common goals.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cultures;
