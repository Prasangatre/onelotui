import Image from "next/image";
import React from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

const TestimonialSection = () => {
  return (
    <div className="bg-[#f9fafb] px-10 md:px-2 flex flex-col justify-center items-center py-6 gap-4 ">
      <div className="font-semibold text-lg">Testimonials</div>
      <div>
        <Image
          alt={"avatar"}
          src={"/Avatar_2.jpg"}
          height={"50"}
          width={"150"}
        />
      </div>
      <div className="font-medium text-center text-base text-[#000] ">
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
      <div className="flex items-center gap-6">
        <div>
          <FaLongArrowAltLeft fontSize={"1.3rem"} color="#707070" />
        </div>
        <div>
          <FaLongArrowAltRight  fontSize={"1.3rem"} color="#707070" />
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
