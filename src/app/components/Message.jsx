"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Message = () => {
  return (
    <div className="relative flex justify-center h-[470px] py-8">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 w-full h-full object-cover opacity-40"
        src="/song/bg_video.mp4"
      ></video>
      <div className="w-[380px] h-[400px] bg-white shadow-xl  z-40 p-4">
        <div className=" relative w-[90%] left-[5%] mb-4 ">
          <p className="text-purpleColor text-[18px] font-semibold  ">
            Send a wish:
          </p>
        </div>

        <input
          type="text"
          placeholder="Your full name"
          className=" relative border border-gray-300 px-2 py-3 rounded-md w-[90%] left-[5%] focus:border-peachColor  focus:outline-none mb-3 text-gray-500"
        />

        <input
          type="text"
          placeholder="Your address"
          className=" relative border border-gray-300 px-2 py-3 rounded-md w-[90%] left-[5%] focus:border-peachColor  focus:outline-none mb-3 text-gray-500"
        />

        <textarea
          type="text"
          placeholder="ex: congrats for this event"
          className=" relative border border-gray-300 px-2 py-3 rounded-md w-[90%] left-[5%] focus:border-peachColor  focus:outline-none mb-3 text-gray-500"
        />

        <button className="relative bg-peachColor  p-3 rounded-full flex flex-col items-center w-[90%] left-[5%] mt-6  ">
          <p className=" text-white text-sm">Submit Now</p>
        </button>
      </div>
    </div>
  );
};

export default Message;
