import React from "react";
import { BiLock } from "react-icons/bi";
import { BsLightningChargeFill, BsTruck } from "react-icons/bs";
import { FaLock, FaThumbsUp } from "react-icons/fa";
import { GiGrowth } from "react-icons/gi";

const FeatureSection = () => {
  return (
    <div className="bg-pink-100 flex justify-center items-center w-full">
      <div className="flex flex-col bg-slate-400 items-center justify-center py-10 w-full gap-4">
        <div className="text-2xl font-bold">Why OneLot</div>
        <div className="flex gap-4 flex-wrap">
          <div className="border-[1px] border-solid border-gray-200 min-h-[10vh] shadow-md rounded-md flex flex-col gap-2 w-[20%] items-center justify-center  bg-white py-6 px-6">
            <div className="bg-[#efe6fa] px-4 py-4 rounded-md">
              <FaLock color="#52028d" fontSize={"1.2rem"} />
            </div>
            <div className="text-lg text-[#000] font-semibold ">Trust</div>
            <div className="text-base text-[#6b7280] font-medium text-center ">
              Regulated by Securities and Exchange Commission (SEC) Philippines
            </div>
          </div>
          <div className="border-[1px] border-solid border-gray-200 min-h-[10vh] shadow-md rounded-md flex flex-col gap-2 w-[20%] items-center justify-center  bg-white py-6 px-6">
            <div className="bg-[#efe6fa] px-4 py-4 rounded-md">
              <GiGrowth color="#52028d" fontSize={"1.2rem"} />
            </div>
            <div className="text-lg text-[#000] font-semibold ">
              High Amount
            </div>
            <div className="text-base text-[#6b7280] font-medium text-center ">
              Get the highest loan amounts compared to other banks and lenders
            </div>
          </div>
          <div className="border-[1px] border-solid border-gray-200 min-h-[10vh] shadow-md rounded-md flex flex-col gap-2 w-[20%] items-center justify-center  bg-white py-6 px-6">
            <div className="bg-[#efe6fa] px-4 py-4 rounded-md">
              <BsLightningChargeFill color="#52028d" fontSize={"1.2rem"} />
            </div>
            <div className="text-lg text-[#000] font-semibold ">Fast</div>
            <div className="text-base text-[#6b7280] font-medium text-center ">
              Get the money within a few hours on the same day
            </div>
          </div>

          <div className="border-[1px] border-solid border-gray-200 min-h-[10vh] shadow-md rounded-md flex flex-col gap-2 w-[20%] items-center justify-center  bg-white py-6 px-6">
            <div className="bg-[#efe6fa] px-4 py-4 rounded-md">
              <BsTruck color="#52028d" fontSize={"1.2rem"} />
            </div>
            <div className="text-lg text-[#000] font-semibold ">Flexible</div>
            <div className="text-base text-[#6b7280] font-medium text-center ">
              Loans are tailored to your needs
            </div>
          </div>
          <div className="border-[1px] border-solid border-gray-200 min-h-[10vh] shadow-md rounded-md flex flex-col gap-2 w-[20%] items-center justify-center  bg-white py-6 px-6">
            <div className="bg-[#efe6fa] px-4 py-4 rounded-md">
              <FaThumbsUp color="#52028d" fontSize={"1.2rem"} />
            </div>
            <div className="text-lg text-[#000] font-semibold ">Easy</div>
            <div className="text-base text-[#6b7280] font-medium text-center ">
              Run through an easy process and get your first
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
