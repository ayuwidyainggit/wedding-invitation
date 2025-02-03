"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Ceremony = () => {
  return (
    <div className="relative flex justify-center h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 w-full h-full object-cover opacity-40"
        src="/song/bg_video.mp4"
      ></video>
      <div className=" absolute top-[10rem]">
        <Image
          src="/couple.png"
          alt="banner"
          width={1000}
          height={1000}
          className=" object-cover h-[150px] w-[150px]"
        />
      </div>

      <div className=" absolute  top-[100px] text-center  flex flex-col items-center ">
        <p className="text-purpleColor text-[35px] mt-[15rem] leading-none mb-7">
          Wedding Ceremony
        </p>
        <p className=" text-xl  text-purpleColor mb-5">07.00 - 08.00</p>

        <p className=" text-3xl font-semibold text-purpleColor mb-5">
          Raffles Hotel
        </p>

        <p className=" text-xl  text-purpleColor">
          Jl. Terusan Jakarta No.53, Cicaheum, Kec. Kiaracondong, Kota Bandung,
          Jawa Barat 40291
        </p>
      </div>
    </div>
  );
};

export default Ceremony;
