"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Gift = () => {
  return (
    <div className=" flex justify-center  ">
      <div className="text-center bg-peachColor w-[350px] h-[700px]   flex flex-col items-center">
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
          Give a Gift
        </p>

        <div className=" bg-white opacity-40 my-6 py-7 px-6">
          <p className=" text-gray-800 font-allura text-xl ">
            Your Prayer of Blessing is a very meaningful gift to us.
          </p>
        </div>

        <p className=" text-gray-500  ">
          And if giving is an expression of your love, you can give a gift by
          sending a digital envelope.
        </p>

        <button className="bg-primary p-3 rounded-md flex flex-col items-center w-[184px] mt-[30px] mb-[50px]">
          <p className=" text-white text-sm">Send Digital Envelope</p>
        </button>
      </div>
    </div>
  );
};

export default Gift;
