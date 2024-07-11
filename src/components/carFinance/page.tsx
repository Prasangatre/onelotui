import Image from "next/image";
import React from "react";
import CustomButton from "../Button/customButton/page";

const FinanceSection = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="bg-yellow-100 flex w-full gap-6 justify-between items-start">
        <div>
          <Image src={"/carfinancing.png"} height={1100} width={1500} />
        </div>
        <div className="flex flex-col gap-8">
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
              <div>Ii</div>
              <div className="text-lg text-[#000000] font-medium">
                Interest as low as 1.75% per month with daily calculation of
                interest
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>Ii</div>
              <div className="text-lg text-[#000000] font-medium">
                Interest as low as 1.75% per month with daily calculation of
                interest
              </div>
            </div>{" "}
            <div className="flex items-center gap-2">
              <div>Ii</div>
              <div className="text-lg text-[#000000] font-medium">
                Interest as low as 1.75% per month with daily calculation of
                interest
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-[#e5e7eb]" />
          <div className="text-base text-[#6b7280] font-medium">
            Use OneLot's financing solution today, grow the number of cars in
            your lot and increase your profits
          </div>
          <div className="w-fit">
            <CustomButton textToDisplay={"View Loans"} />
          </div>
        </div>
      </div>
      <div className="bg-yellow-100 flex w-full gap-6 justify-between items-center">
        <div className="flex px-6 flex-col gap-6">
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
              <div>Ii</div>
              <div className="text-lg text-[#000000] font-medium">
                <span className="text-[#000] font-bold">
                  Inventory Management:
                </span>{" "}
                Track all details about your cars and sales in one place - from
                car details to buyers. All you need to now in one place
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div>Ii</div>
              <div className="text-lg text-[#000000] font-medium">
                <span className="text-[#000] font-bold">
                  Inventory Management:
                </span>{" "}
                Track all details about your cars and sales in one place - from
                car details to buyers. All you need to now in one place
              </div>
            </div>{" "}
            <div className="flex items-center gap-2">
              <div>Ii</div>
              <div className="text-lg text-[#000000] font-medium">
                <span className="text-[#000] font-bold">
                  Inventory Management:
                </span>{" "}
                Track all details about your cars and sales in one place - from
                car details to buyers. All you need to now in one place
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-[#e5e7eb]" />
          <div className="text-base text-[#6b7280] font-medium">
            Sign-up OneLot's dealer platform today, and your cars easier.
          </div>
          <div className="w-fit">
            <CustomButton textToDisplay={"Explore Now"} />
          </div>
        </div>
        <div>
          <Image src={"/dmscontent.png"} height={1100} width={1500} />
        </div>
      </div>
    </div>
  );
};

export default FinanceSection;
