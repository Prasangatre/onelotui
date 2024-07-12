import Image from "next/image";
import React from "react";
import CustomButton from "../Button/customButton/page";
import { GiConfirmed } from "react-icons/gi";

const FinanceSection = () => {
  return (
    <div className="flex flex-col  bg-[#f9fafb]">
      <div className="flex px-2 flex-col md:flex-row md:px-0  w-full gap-6 justify-between items-start">
        <div className="order-2 md:order-1 md:py-6">
          <Image
            src={"/carfinancing.png"}
            height={800}
            width={900}
            alt="carfinance"
          />
        </div>
        <div className="flex md:order-2 md:pr-16 flex-col gap-6 md:py-6">
          <div className="text-2xl text-[#000000] font-bold">Car Financing</div>
          <div className="text-lg text-[#000000] font-medium">
            Dealer Inventory Loans
          </div>
          <div className="text-base text-[#6b7280] font-medium">
            OneLot’s working capital loans allows car dealer to buy more cars
            and capitalize on car purchase opportunities you would otherwise
            have missed. We transfer the money to your account within 6 hours.
          </div>
          <div className="h-[1px] bg-[#e5e7eb]" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div>
                <GiConfirmed color="#c3b6d1" fontSize={"1rem"} />
              </div>
              <div className="text-lg text-[#000000] font-medium">
                Interest as low as 1.75% per month with daily calculation of
                interest
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <GiConfirmed color="#c3b6d1" fontSize={"1rem"} />
              </div>
              <div className="text-lg text-[#000000] font-medium">
                Financing up to 70% of the vehicle purchase
              </div>
            </div>{" "}
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <GiConfirmed color="#c3b6d1" fontSize={"1rem"} />
              </div>
              <div className="text-lg text-[#000000] font-medium">
                Financing period up to 90 days with flexible repayment schedule
                at any point
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-[#e5e7eb]" />
          <div className="text-base text-[#6b7280] font-medium">
            Use OneLot's financing solution today, grow the number of cars in
            your lot and increase your profits
          </div>
          <div className="w-fit">
            <CustomButton textToDisplay={"View Loans"} toShowIcon={true} />
          </div>
        </div>
      </div>
      <div className=" flex flex-col mt-16 md:flex-row md:px-0 w-full gap-6 justify-between items-center">
        <div className="flex px-2 md:px-16 md:py-6 flex-col gap-6">
          <div className="text-2xl text-[#000000] font-bold">
            Dealership Management System
          </div>
          <div className="text-lg text-[#000000] font-medium">
            OneLot’s digital platform has been build with the single goal to
            help used car dealers to operate their business more efficiently.
          </div>

          <div className="h-[1px] bg-[#e5e7eb]" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div>
                <GiConfirmed color="#c3b6d1" fontSize={"1rem"} />
              </div>
              <div className="text-lg text-[#000000] font-medium">
                <span className="text-[#000] font-bold">
                  Inventory Management:
                </span>{" "}
                Track all details about your cars and sales in one place - from
                car details to buyers. All you need to now in one place
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <GiConfirmed color="#c3b6d1" fontSize={"1rem"} />
              </div>
              <div className="text-lg text-[#000000] font-medium">
                <span className="text-[#000] font-bold">Marketing Tools:</span>{" "}
                Promote your cars across all the different platforms. Write a
                marketing text and upload on Facebook Marketplace, Groups, Pages
                and Instagram with a single click of a button
              </div>
            </div>{" "}
            <div className="flex items-center gap-2">
              <div>
                {" "}
                <GiConfirmed color="#c3b6d1" fontSize={"1rem"} />
              </div>
              <div className="text-lg text-[#000000] font-medium">
                <span className="text-[#000] font-bold">
                  Marketing Insights (Coming Soon):
                </span>{" "}
                Get insights on prices and volumes for all cars in the market.
                We provide you all the date by combining data from various
                sources with a single click of a button.
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-[#e5e7eb]" />
          <div className="text-base text-[#6b7280] font-medium">
            Sign-up OneLot's dealer platform today, and your cars easier.
          </div>
          <div className="w-fit">
            <CustomButton textToDisplay={"Explore Now"} toShowIcon={true} />
          </div>
        </div>
        <div>
          <Image
            alt="content"
            src={"/dmscontent.png"}
            height={400}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default FinanceSection;
