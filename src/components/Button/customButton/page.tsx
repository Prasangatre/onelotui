import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
type ICustomButtonProps ={
    textToDisplay: string
    toShowIcon?:boolean
}
const CustomButton = ({ textToDisplay,toShowIcon }:ICustomButtonProps) => {
  return (
    <div className="px-4 py-2 rounded-md flex gap-2 items-center justify-center text-[#FFF] bg-[#57009c] cursor-pointer">

          <div>
              {textToDisplay}
          </div>
          {
              toShowIcon ? <div>
                  <FaLongArrowAltRight color="#FFF"fontSize={"1.2rem"} />

              </div>:<></>
          }
      </div>

  );
};

export default CustomButton;
