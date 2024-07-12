import Image from "next/image";
import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const TestimonialSection = () => {
  return (
    <div className="bg-red-100 flex flex-col justify-center items-center py-6 ">
      <div className="font-semibold text-lg">Testimonials</div>
      <div>
        <Image src={"/Avatar_2.jpg"} height={"50"} width={"150"} />
      </div>
      <div className="font-medium line-clamp-2 text-base text-[#000] ">
        "The service of OneLot is top notch, they act fast ad can provide
        dealers with the funds they need,whey they need it"
      </div>
      <div className="flex items-center gap-1">
        <div className="font-medium line-clamp-2 text-base text-[#000] ">
          Mark Vergel de Dios
        </div>
        <div className="font-medium line-clamp-2 text-base text-[#000] ">
          Owner MVD Auto Works
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <BiLeftArrow />
        </div>
        <div>
          <BiRightArrow />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
