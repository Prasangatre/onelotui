"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const images = ["/fbpost.png", "/fbpost.png", "/fbpost.png", "/fbpost.png"];

const InfiniteScroll = () => {
  return (
    <div className="w-full flex justify-center items-center overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="flex w-full md:w-[70%] gap-4 ">
        {[...images].map((src, index) => (
          <div key={index} className="animate-infinite-scroll shrink-0">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={800}
              height={900}
              className="object-cover w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[800px]"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;
