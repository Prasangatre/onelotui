import React from "react";
import CustomButton from "../Button/customButton/page";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="mt-5 bg-[#f9fafb]">
      <div className="w-full flex items-center flex-col justify-center">
        <div className=" flex flex-col w-[100%] text-justify p-2  md:w-[60%] md:text-center justify-center items-center gap-4">
          <div className="text-6xl md:text-7xl font-bold text-center text-[#000000]">
            Grow your dealership with car loans and digital tools for dealers
          </div>
          <div className="text-xl text-center font-medium text-[#6b7280]">
            We enable dealers to buy more cars through our inventory loan
            solutions and sell cars more efficiently through our Dealership
            Management System with its inventory management, marketing solutions
            and market insights
          </div>
          <div>
            <CustomButton textToDisplay={"Inquire now"} />
          </div>
        </div>
        <div className=" w-[90%] flex items-center justify-center flex-col gap-2">
          <div>
            <Image
              alt="carImage"
              src={"/cars.jpg"}
              height={1000}
              width={1500}
            />
          </div>
          <div className="text-[#6b7280] font-medium text-base">
            Regulated by
          </div>
          <div>
            <Image alt="" src={"/sec.jpg"} height={200} width={160} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
