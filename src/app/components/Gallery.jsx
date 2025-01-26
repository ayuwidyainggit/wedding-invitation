"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Gallery = () => {
  return (
    <div className=" flex justify-center  ">
      <div className="relative text-center bg-peachColor w-[350px] h-[100vh]   flex flex-col items-center">
        <div className="flex items-center mt-6">
          <div className=" flex flex-col items-end">
            <Image
              src="/icon/left1.png"
              alt="banner"
              width={1000}
              height={1000}
              className=" h-[15px] w-[15px]"
            />
            <Image
              src="/icon/left2.png"
              alt="banner"
              width={1000}
              height={1000}
              className=" h-[20px] w-[20px] "
            />
          </div>
          <div className="bg-primary h-[2px] w-[120px] rounded-full"></div>
          <div className="-mb-3 -ml-3">
            <Image
              src="/icon/left2.png"
              alt="banner"
              width={1000}
              height={1000}
              className=" h-[10px] w-[10px] "
            />
          </div>
          <div className="mx-2">
            <Image
              src="/icon/pinkFlower.png"
              alt="banner"
              width={1000}
              height={1000}
              className="object-cover h-[30px] w-[30px]  "
            />
          </div>
          <div className="-mb-3 -mr-3">
            <Image
              src="/icon/right2.png"
              alt="banner"
              width={1000}
              height={1000}
              className=" h-[10px] w-[10px] "
            />
          </div>
          <div className="bg-primary h-[2px] w-[120px] rounded-full "></div>
          <div className=" ">
            <Image
              src="/icon/right1.png"
              alt="banner"
              width={1000}
              height={1000}
              className=" h-[15px] w-[15px]"
            />
            <Image
              src="/icon/right2.png"
              alt="banner"
              width={1000}
              height={1000}
              className=" h-[20px] w-[20px] "
            />
          </div>
        </div>

        <p className=" text-purpleColor text-[35px] my-10 leading-none">
          Gallery
        </p>

        <div className="absolute mt-[150px] -ml-[240px]">
          <Image
            src="/1.jpg"
            alt="banner"
            width={1000}
            height={1000}
            className=" object-cover h-[250px] w-[170px] rounded-xl "
          />
        </div>
        <div className="absolute mt-[150px] -mr-[180px]">
          <Image
            src="/2.jpg"
            alt="banner"
            width={1000}
            height={1000}
            className=" object-cover h-[120px] w-[230px] rounded-xl "
          />
        </div>
        <div className="absolute mt-[280px] -mr-[180px]">
          <Image
            src="/5.jpg"
            alt="banner"
            width={1000}
            height={1000}
            className=" object-cover h-[120px] w-[230px] rounded-xl "
          />
        </div>

        <div className="absolute mt-[410px] -ml-[240px]">
          <Image
            src="/1.jpg"
            alt="banner"
            width={1000}
            height={1000}
            className=" object-cover h-[250px] w-[170px] rounded-xl "
          />
        </div>
        <div className="absolute mt-[410px] -mr-[180px]">
          <Image
            src="/2.jpg"
            alt="banner"
            width={1000}
            height={1000}
            className=" object-cover h-[120px] w-[230px] rounded-xl "
          />
        </div>
        <div className="absolute mt-[540px] -mr-[180px]">
          <Image
            src="/5.jpg"
            alt="banner"
            width={1000}
            height={1000}
            className=" object-cover h-[120px] w-[230px] rounded-xl "
          />
        </div>

        <p className=" absolute text-gray-500 mt-[700px]">
          "And among His verses is that He has created for you wives of your own
          kind, so that you may feel comfortable in them, and He has made
          between you mawaddah and mercy. Verily in that are signs for the
          people who think"
        </p>
      </div>
    </div>
  );
};

export default Gallery;
