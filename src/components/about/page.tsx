import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const About = () => {
  return (
    <div className="flex flex-col px-2 md:flex-row gap-8 items-start  md:px-20 py-6 w-full">
      <div className="flex flex-col gap-3">
        <div className="font-bold text-[#000] text-xl">
          Everything you need to grow your business
        </div>
        <div className="font-medium text-[#6b7280] text-lg text-justify">
          OneLot is your trusted lending and financing partner, exclusively
          tailored for used car dealership. We also offer digital tools for
          streamlined operations and growth of your dealership.
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[#57099C]">Learn more</div>
          <div>
            <FaArrowRight color="#57099C" fontSize={"0.8rem"} />
          </div>
        </div>
      </div>
      <div className="flex flex-col  gap-4">
        <div className="flex items-start gap-3">
          <div>
            <Image
              loading="lazy"
              alt="speaker"
              src={"/dollar.svg"}
              width={"40"}
              height={"30"}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-base font-semibold text-[#000000]">
              Dealer Inventory Loans
            </div>
            <div className="text-base font-semibold text-[#7e3af2]">
              Accelerate your growth with tailored loan solutions
            </div>
            <div className="text-base font-semibold text-[rgb(107,114,128)]">
              Get comprehensive car financing solutions, unlock the potential of
              your dealership and take it to new heights.
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-md font-medium text-[#7e3af2]">
                Learn more
              </div>
              <div>
                <FaArrowRight color="#57099C" fontSize={"0.8rem"} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex  items-start gap-3">
          <div>
            {" "}
            <Image
              loading="lazy"
              alt="mic"
              src={"/mic.png"}
              width={"40"}
              height={"30"}
            />
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-base font-semibold text-[#000000]">
              Dealership Management System
            </div>
            <div className="text-base font-semibold text-[#7e3af2]">
              Accelerate your growth with tailored loan solutions
            </div>
            <div className="text-base font-semibold text-[rgb(107,114,128)]">
              Get comprehensive car financing solutions, unlock the potential of
              your dealership and take it to new heights.
            </div>
            <div className="flex gap-2 items-center">
              <div className="text-md font-medium text-[#7e3af2]">
                Learn more
              </div>
              <div>
                <FaArrowRight color="#57099C" fontSize={"0.8rem"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
