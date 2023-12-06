"use client";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(navbar);
  }, [navbar]);
  return (
    <header>
      <nav className="opacity-35 fit-con fixed z-10 w-full bg-white font-semibold">
        <div className="mx-auto justify-between px-4 md:flex md:items-center md:px-8 lg:max-w-7xl">
          <div>
            <div className="flex items-center justify-between py-3 md:block md:py-5">
              {/* Logo */}
              <Link href="./" class="flex items-center">
                <span class="text-xl font-semibold  dark:text-white">
                  <Image
                    src="/logo.png"
                    width={110}
                    height={110}
                    alt="shipping company logo"
                  />
                </span>
              </Link>
              {/* Hamburger */}
              <div className="md:hidden">
                <button
                  className="rounded-md p-2 text-primary "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <GiHamburgerMenu
                      width={150}
                      height={130}
                      size="30px"
                      alt="logo"
                    />
                  ) : (
                    <GiHamburgerMenu
                      width={150}
                      height={130}
                      size="30px"
                      alt="logo"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`mt-8 flex-1 justify-self-center pb-3 md:mt-4 md:block md:pb-0 ${
                isMenuOpen ? "block p-12 md:p-0" : "hidden"
              }`}
            >
              <ul className="h-full items-center justify-center md:flex md:h-auto ">
                <li className="border-b-2 py-2 pb-6 text-center text-xl text-primary  md:border-b-0 md:px-6  md:hover:text-[#DDE6ED]">
                  <Link href="../about" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li>
                <li className="mmd:hover:text-[#DDE6ED] border-b-2 px-6 py-2 pb-6 text-center text-xl  text-primary  md:border-b-0">
                  <Link href="../product/" onClick={() => setNavbar(!navbar)}>
                    Services
                  </Link>
                </li>
                <li className="border-b-2 px-6 py-2 pb-6 text-center text-xl text-primary  md:border-b-0  md:hover:text-[#DDE6ED]">
                  <Link href="../teams/" onClick={() => setNavbar(!navbar)}>
                    Teams
                  </Link>
                </li>
                <li className="border-b-2 px-6 py-2 pb-6 text-center text-xl text-primary  md:border-b-0  md:hover:text-[#DDE6ED]">
                  <Link href="../contact/" onClick={() => setNavbar(!navbar)}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
