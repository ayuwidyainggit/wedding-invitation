"use client";
import Image from "next/image";
import React, { useEffect } from "react";

const Home = () => {
  return (
    <div>
      <div className="relative rounded-b-full flex items-center justify-center">
        <Image
          src="/3.jpg"
          alt="banner"
          width={1000}
          height={1000}
          className="object-cover h-[800px] shadow-pink"
        />
        <div className="absolute h-[800px] w-[350px]  top-0 bg-primary opacity-60"></div>
        <div className="absolute w-[350px]">
          <p className=" text-white text-center font-bold text-base">
            Ya Allah the Most Loving
          </p>
          <p className=" text-white text-center text-sm mb-[20px]">
            With Your blessing, you brought us together in a holy marriage bond
          </p>
          <p className=" text-white text-center my-[20px] text-xl">
            THE WEDDING OF
          </p>
          <div className=" flex gap-2 justify-center ">
            <div className="flex flex-col justify-start items-end">
              <Image
                src="/cover/c10.png"
                alt="banner"
                width={1000}
                height={1000}
                className="object-cover h-[30px] w-[30px] shadow-pink"
              />
              <Image
                src="/cover/c9.png"
                alt="banner"
                width={1000}
                height={1000}
                className="object-cover h-[20px] w-[20px] shadow-pink"
              />
            </div>
            <p className=" text-white text-center  font-allura  font-extrabold text-[50px]">
              Arif & Ayu
            </p>
            <div className="">
              <Image
                src="/cover/c1.png"
                alt="banner"
                width={1000}
                height={1000}
                className="object-cover h-[30px] w-[30px] shadow-pink"
              />
              <Image
                src="/cover/c2.png"
                alt="banner"
                width={1000}
                height={1000}
                className="object-cover h-[20px] w-[20px] shadow-pink"
              />
            </div>
          </div>
          <div className=" flex gap-2 items-center justify-center">
            <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
            <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
            <p className=" text-white text-center text-base"> 11 Mei 2025</p>
            <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
            <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
            <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
