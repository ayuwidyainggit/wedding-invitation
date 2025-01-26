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
    <div className="">
      <div className="relative rounded-b-full flex items-center justify-center">
        <Image
          src="/3.jpg"
          alt="banner"
          width={1000}
          height={1000}
          className="object-cover h-[500px]  w-[500px] rounded-b-3xl shadow-pink"
        />
        <div
          className="absolute h-[500px] w-full bg-slate-600 b top-0 rounded-b-3xl"
          style={{ backgroundColor: "rgba(64, 64, 64, 0.4)" }}
        ></div>
        <div className=" absolute border-2 border-white rounded-full w-[300px] h-[300px]  opacity-70 "></div>
        <div className=" absolute  border border-white rounded-full w-[290px] h-[290px]   opacity-70"></div>
        <div className="absolute">
          <p className="text-white text-center ">
            Hello, <span className=" font-bold">Ms Farah </span>
          </p>
          <p className="text-white text-center">
            We invite you to attend our wedding
          </p>
          <p className="text-white text-center font-bold text-3xl font-allura">
            Arif & Ayu
          </p>
        </div>
        <div className="absolute top-[85px] left-[280px]">
          <Image
            src="/cover/c1.png"
            alt="banner"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px]  opacity-70 "
          />
        </div>
        <div className="absolute top-[130px] left-[300px]">
          <Image
            src="/cover/c2.png"
            alt="banner"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px]  opacity-70"
          />
        </div>
        <div className="absolute top-[158px] left-[340px]">
          <Image
            src="/cover/c3.png"
            alt="banner"
            width={1000}
            height={1000}
            className="w-[35px] h-[20px]  opacity-70"
          />
        </div>
        <div className="absolute top-[360px]">
          <Image
            src="/cover/flower.png"
            alt="banner"
            width={1000}
            height={1000}
            className="w-[50px] h-[50px]  opacity-70"
          />
        </div>
        <div className="absolute top-[360px] left-[300px]">
          <Image
            src="/cover/c4.png"
            alt="banner"
            width={1000}
            height={1000}
            className="w-[20px] h-[20px]  opacity-70"
          />
        </div>
        <div className="absolute top-[360px] left-[260px]">
          <Image
            src="/cover/c5.png"
            alt="banner"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px]  opacity-70"
          />
        </div>
        <div className="absolute top-[360px] right-[300px]">
          <Image
            src="/cover/c7.png"
            alt="banner"
            width={1000}
            height={1000}
            className="w-[20px] h-[20px]  opacity-70"
          />
        </div>
        <div className="absolute top-[360px] right-[260px]">
          <Image
            src="/cover/c6.png"
            alt="banner"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px]  opacity-70"
          />
        </div>
        <div className="absolute top-[85px] right-[280px]">
          <Image
            src="/cover/c10.png"
            alt="banner"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px]  opacity-70 "
          />
        </div>
        <div className="absolute top-[130px] right-[300px]">
          <Image
            src="/cover/c9.png"
            alt="banner"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px]  opacity-70"
          />
        </div>
        <div className="absolute top-[158px] right-[340px]">
          <Image
            src="/cover/c8.png"
            alt="banner"
            width={1000}
            height={1000}
            className="w-[35px] h-[20px]  opacity-70"
          />
        </div>
      </div>

      <div className=" relative flex justify-center -mt-7   flex justify-center gap-5">
        <div className=" flex flex-col items-end">
          <Image
            src="/icon/left1.png"
            alt="banner"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px] "
          />
          <Image
            src="/icon/left2.png"
            alt="banner"
            width={1000}
            height={1000}
            className="w-[20px] h-[20px] "
          />
        </div>
        <Link href="/home">
          <button
            onClick={handlePlay}
            className="bg-primary p-3 rounded-full flex flex-col items-center w-[184px]"
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

        <div className="">
          <Image
            src="/icon/right1.png"
            alt="banner"
            width={1000}
            height={1000}
            className="w-[30px] h-[30px] "
          />
          <Image
            src="/icon/right2.png"
            alt="banner"
            width={1000}
            height={1000}
            className="w-[20px] h-[20px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Cover;
