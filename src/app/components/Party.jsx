"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Party = () => {
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
          src="/icon/party.png"
          alt="banner"
          width={1000}
          height={1000}
          className=" h-[200px] w-[200px]"
        />
      </div>

      <div className=" absolute  top-[140px] text-center  flex flex-col items-center ">
        <p className="text-peachColor text-[35px] mt-[15rem] leading-none mb-7">
          Wedding Party
        </p>
        <p className=" text-xl  text-peachColor mb-5">09.00 - 12.00</p>

        <p className=" text-3xl font-semibold text-peachColor mb-5">
          Raffles Hotel
        </p>

        <p className=" text-xl  text-peachColor">
          Jl. Terusan Jakarta No.53, Cicaheum, Kec. Kiaracondong, Kota Bandung,
          Jawa Barat 40291
        </p>

        <button className=" mt-5  bg-peachColor  p-3 rounded-md flex flex-col items-center w-[184px]  ">
          <p className=" text-white text-sm">Open Map</p>
        </button>
      </div>
    </div>
  );
};

export default Party;
