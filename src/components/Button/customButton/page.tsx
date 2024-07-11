import React from "react";

const CustomButton = ({ textToDisplay }) => {
  return (
    <div className="px-4 py-2 rounded-md flex items-center justify-center text-[#FFF] bg-[#57009c] cursor-pointer">
      {textToDisplay}
    </div>
  );
};

export default CustomButton;
