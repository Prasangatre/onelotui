import React from "react";
import { IconType } from "react-icons";
import { AiOutlineStock } from "react-icons/ai";
import { BiLock } from "react-icons/bi";
import { BsLightningChargeFill, BsTruck } from "react-icons/bs";
import { FaLock, FaThumbsUp } from "react-icons/fa";
import { GiGrowth } from "react-icons/gi";
interface FeatureCardProps {
  icon: IconType;
  title: string;
  description: string;
}

const FeatureSection = () => {
  const features: FeatureCardProps[] = [
    {
      icon: FaLock,
      title: "Trust",
      description:
        "Regulated by Securities and Exchange Commission (SEC) Philippines",
    },
    {
      icon: AiOutlineStock,
      title: "High Amount",
      description:
        "Get the highest loan amounts compared to other banks and lenders",
    },
    {
      icon: BsLightningChargeFill,
      title: "Fast",
      description: "Get the money within a few hours on the same day",
    },
    {
      icon: BsTruck,
      title: "Flexible",
      description: "Loans are tailored to your needs",
    },
    {
      icon: FaThumbsUp,
      title: "Easy",
      description: "Run through an easy process and get your first",
    },
  ];

  return (
    <div className=" flex justify-center items-center w-full">
      <div className="flex flex-col  items-center justify-center py-10 w-full gap-4">
        <div className="text-2xl font-bold">Why OneLot</div>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-2 px-4">
          {features.map((feature, index) => (
            <div key={index} className="border-[1px] border-solid border-gray-200  shadow-md rounded-md flex flex-col gap-2 items-center justify-between bg-white py-6 px-4">
              <div className="w-full flex items-baseline justify-center ">
                <div className="bg-[#efe6fa] px-4 flex justify-center items-center md:w-[20%] w-[10%] py-4 rounded-md">
                  <feature.icon color="#52028d" fontSize="1.2rem" />
                </div>
              </div>
              <div className="flex flex-col gap-4 justify-start items-center  min-h-40">
                <div className="text-lg text-[#000] font-semibold">
                  {feature.title}
                </div>
                <div className="text-base text-[#6b7280] font-medium text-center">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
