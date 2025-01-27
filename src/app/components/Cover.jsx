"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Cover = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const audio = new Audio("/song/song.mp3"); // Ganti dengan path audio kamu
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch((err) => console.error("Error playing audio:", err));
  };
  return (
    <div className=" relative bg-[#fff8f8] h-screen flex flex-col justify-center items-center">
      <video
        autoPlay
        muted
        loop
        className=" absolute top-0  w-full h-full object-cover  opacity-40"
        src="/song/1.mp4"
      ></video>

      <div className="absolute top-60">
        <p className=" text-gray-600 text-center   text-[20px]">
          The wedding of
        </p>

        <p className=" text-gray-600 text-center  font-allura  text-[60px]">
          Arif & Ayu
        </p>
        <p className=" text-gray-600 text-center   text-[17px]">
          Sunday, 11 May 2025
        </p>
        <p className=" text-gray-600 text-center   text-[17px]">
          To : Irsalina
        </p>
      </div>

      <div className="absolute bottom-[200px]">
        <Link href="/home">
          <button
            onClick={handlePlay}
            className="bg-primary p-3 rounded-full flex flex-col items-center w-[184px] "
          >
            <Image
              src="/icon/invitation.png"
              alt="banner"
              width={1000}
              height={1000}
              className="object-cover w-[20px] h-[20px] shadow-pink"
            />

            <p className=" text-white text-sm">Open Invitation</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cover;
