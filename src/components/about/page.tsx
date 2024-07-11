import React from "react";

const About = () => {
  return (
    <div className="flex gap-8 items-start bg-lime-50 px-8 py-6">
      <div className="flex flex-col gap-3">
        <div className="font-bold text-[#000] text-xl">
          Everything you need to grow your business
        </div>
        <div className="font-bold text-[#000] text-xl">
          OneLot is your trusted lending and financing partner, exclusively
          tailored for used car dealership. We also offer digital tools for
          streamlined operations and growth of your dealership.
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-start gap-1">
          <div> iI</div>
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
              <div>iI</div>
            </div>
          </div>
        </div>
        <div className="flex items-start gap-1">
          <div> iI</div>
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
              <div>iI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
