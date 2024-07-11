import React from "react";
import CustomButton from "../Button/customButton/page";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div>
      <div className="w-full flex items-center flex-col justify-center">
        <div className="bg-red-100 flex flex-col w-[70%] justify-center items-center gap-4">
          <div className="text-7xl font-bold text-center text-[#000000]">
            Grow your dealership with car loans and digital tools for dealers
          </div>
          <div className="text-xl text-center font-medium text-[#000000]">
            We enable dealers to buy more cars through our inventory loan
            solutions and sell cars more efficiently through our Dealership
            Management System with its inventory management, marketing solutions
            and market insights
          </div>
          <div>
            <CustomButton textToDisplay={"Inquire now"} />
          </div>
        </div>
        <div className="bg-green-200 w-[90%] flex items-center justify-center flex-col">
          <div>
            <Image src={"/cars.jpg"} height={1000} width={1500} />
          </div>
          <div className="text-[#6b7280] font-medium text-base">
            Regulated by
          </div>
          <div>
            <Image src={"/sec.jpg"} height={100} width={100} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
