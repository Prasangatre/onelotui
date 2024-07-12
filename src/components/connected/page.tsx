import Image from "next/image";
import React from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const ConnectedSection = () => {
  return (
    <div className="bg-pink-100 flex flex-col gap-6 justify-center items-center py-8">
      <div className="font-bold text-xl">Stay connected</div>
      <div className="text-[#000] text-base line-clamp-3">
        Follow OneLot on our Facebook and Instagram page and stay up to date
        with our most recent offers, updates and new product features
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2 px-4 py-2 rounded-md border-solid border-[1px]  border-[#000000]">
          <div>
            <FaFacebook />
          </div>
          <div> Follow us on Facebook</div>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-md border-solid border-[1px]  border-[#000000]">
          <div>
            <BsInstagram />
          </div>
          <div> Follow us on Instagram</div>
        </div>
          </div>
          <div>
              <div className="flex items-center gap-4">
                  <div>
                  <Image src={'/fbpost.png'} height={"400"} width={'460'}/>

                  </div>
                  <div>
                  <Image src={'/fbpost.png'} height={"400"} width={'460'}/>

                  </div>

              </div>
          </div>
    </div>
  );
};

export default ConnectedSection;
