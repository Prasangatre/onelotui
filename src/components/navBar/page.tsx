import Image from "next/image";
import React from "react";
import CustomButton from "../Button/customButton/page";

const NavBar = () => {
  return (
    <div className="flex justify-between p-1 bg-red-100 ">
      <div className="flex items-center gap-[1rem]">
        <div>
          <Image src="/logo.jpg" height={100} width={140} />
        </div>
        <div className=" text-[#57009c] text-base font-medium ">Home</div>
        <div className=" text-[#00000] text-base font-normal ">Products</div>
        <div className=" text-[#00000] text-base font-normal ">About</div>
        <div className=" text-[#00000] text-base font-normal ">Contact</div>
      </div>
      <div className="flex items-center gap-[1rem]">
        <div>
          <div className=" text-[#00000] text-base font-normal ">Log In</div>
        </div>
        <div>
          <CustomButton textToDisplay={"Get Started"} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
