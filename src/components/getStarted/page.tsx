import React from "react";
import CustomButton from "../Button/customButton/page";
import { BiDownArrow } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { BsFlagFill, BsInstagram, BsUsbFill } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex mt-10 flex-col gap-4 items-center justify-center">
      <div className="font-bold text-[#000] text-xl">Get started today</div>
      <div className="text-[#6B7280] px-8 text-base text-center font-medium md:line-clamp-2 md:w-[40%]">
        We look forward to serving the needs of used car dealers across the
        Philippines and helping them thrive in this dynamic market.
      </div>
      <div className="w-fit">
        <CustomButton textToDisplay={"Inquire now"} />
      </div>
      <div className="mt-10 md:px-6 w-full">
        <div className="flex flex-col md:flex-row justify-between gap-[1rem]">
          <div>
            <Image alt="logo" src="/logo.jpg" height={100} width={140} />
          </div>
          <div className="flex flex-col items-start px-6 md:px-0 md:flex-row md:items-center gap-4">
            <div className=" text-[#000000] text-base font-medium ">Home</div>
            <div className=" text-[#00000] text-base font-normal ">
              Products
            </div>
            <div className=" text-[#00000] text-base font-normal ">About</div>
            <div className=" text-[#00000] text-base font-normal ">Contact</div>
          </div>
        </div>
        <div className="flex w-full justify-start px-6 md:px-0 md:justify-end gap-1 items-center">
          <div>ENG</div>
          <div>
            <BsUsbFill fontSize={"1.5rem"} />
          </div>
          <div>
            <BiDownArrow />
          </div>
        </div>
        <div>
          <div className="h-[1px] bg-[#e5e7eb]" />
          <div className="flex px-6 mt-2 py-2 md:px-0 flex-col gap-4">
            <div>
              © 2023 OneLot Technologies Incorporated Pte. Ltd. All Rights
              Reserved.
            </div>
            <div className="flex flex-col gap-2 md:flex-row justify-between">
              <div>
                © 2023 OneLot Financing Corporation. All Rights Reserved.
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <FaFacebook />
                </div>
                <div>
                  <BsInstagram />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
