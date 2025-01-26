"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Story = () => {
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
          Our Story
        </p>

        <div className="">
          <Image
            src="/1.jpg"
            alt="banner"
            width={1000}
            height={1000}
            className=" object-cover h-[300px] w-[300px] rounded-xl "
          />
        </div>

        <div className=" bg-white opacity-40 my-6 py-7">
          <p className=" text-gray-500 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dolor
            mauris odio tellus sem neque, pretium sem sed montes. Enim, cursus
            massa nec massa ultrices mauris donec id volutpat. Libero sed
            placerat morbi proin at nibh. Adipiscing nec pretium egestas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Story;
