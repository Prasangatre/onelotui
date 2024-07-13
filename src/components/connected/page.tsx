import Image from "next/image";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import InfiniteHorizontalScroll from "../infiniteScroll";

const ConnectedSection = () => {
  return (
    <div className=" flex flex-col gap-6 justify-center items-center py-8">
      <div className="font-bold text-xl">Stay connected</div>
      <div className="text-[#000] text-base text-center md:line-clamp-2 md:w-[40%] px-6">
        Follow OneLot on our Facebook and Instagram page and stay up to date
        with our most recent offers, updates and new product features
      </div>
      <div className="flex flex-col md:flex-row items-center gap-2">
        <div className="flex items-center gap-2 px-4 py-2 rounded-md border-solid border-[1px] cursor-pointer border-[#000000]">
          <div>
            <FaFacebook />
          </div>
          <div> Follow us on Facebook</div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-md border-solid border-[1px] cursor-pointer  border-[#000000]">
          <div>
            <BsInstagram />
          </div>
          <div> Follow us on Instagram</div>
        </div>
      </div>
      <div>
        <InfiniteHorizontalScroll />
      </div>
    </div>
  );
};

export default ConnectedSection;
