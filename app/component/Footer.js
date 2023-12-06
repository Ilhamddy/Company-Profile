import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import Link from "next/link";

const Footer = () => {
  return (
    <main>
      <div className="my-10 py-10 md:px-10">
        <div className="grid grid-cols-1 p-5 md:grid-cols-4">
          <div className="m-3 text-justify ">
            <div className="flex items-center font-bold">
              <span>
                <MdDeveloperMode />
              </span>
              <span>Ilhammdy</span>
            </div>
            <div>
              Generix Express provides costumized services for costumers around
              the world from 50+ leading indutries. for more information please
            </div>
          </div>
          <div className="m-3 ">
            <div className="font-bold">Products</div>
            <div>Features</div>
            <div>Enterpise</div>
            <div>Security</div>
          </div>
          <div className="m-3">
            <div className="font-bold">Company</div>
            <div>
              <Link href={"/about"}>About Us</Link>
            </div>
            <div>
              <Link href={"/product"}>Services</Link>
            </div>
            <div>News</div>
            <div>
              <Link href={"/teams"}>Team</Link>
            </div>
            <div>
              <Link href={"/contact"}>Contact</Link>
            </div>
          </div>
          <div className="m-3">
            <div>
              <div className="font-bold">Office</div>
              <div>123 Anywhere St. Any</div>
              <div>City, ST 12345</div>
            </div>
            <div className="mt-10">
              <div className="font-bold">Contact US</div>
              <div>Ilhamddy@shipping.com</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex  h-20 items-center justify-between bg-primary p-10 text-white">
        <h1 className=" text-xs text-white">
          © 2023 Ilhamddy. All Rights Reserved.
        </h1>
        <div className="flex">
          <div className="m-1">
            <RiTwitterXLine />
          </div>
          <div className="m-1">
            <FaInstagram />
          </div>
          <div className="m-1">
            <FaGithub />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
