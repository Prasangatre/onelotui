"use client";
import Image from "next/image";
import React, { useState } from "react";
import CustomButton from "../Button/customButton/page";
import { GiHamburgerMenu } from "react-icons/gi";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navLinks = [
    {
      name: "Home",
      id: 1,
    },
    {
      name: "Product",
      id: 2,
    },
    {
      name: "About",
      id: 3,
    },
    {
      name: "Contact",
      id: 4,
    },
  ];

  return (
    <div className="flex justify-between p-1">
      <div className="flex items-center gap-[1rem]">
        <div>
          <Image alt="logo" src="/logo.jpg" height={100} width={140} />
        </div>
        <div className="flex items-center gap-[1rem]">
          {navLinks.map((data) => {
            return (
              <div className="hidden  text-base font-medium md:flex ">
                {data.name}{" "}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex items-center gap-[1rem]">
        <div className="flex md:hidden">
          <GiHamburgerMenu color="#000000" fontSize={"1.5rem"} />
        </div>
        <div>
          <div className=" hidden text-[#00000] text-base font-normal md:flex">
            Log In
          </div>
        </div>
        <div className="hidden md:flex">
          <CustomButton textToDisplay={"Get Started"} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
