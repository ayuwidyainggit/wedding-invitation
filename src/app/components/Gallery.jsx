"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Gallery = () => {
  const [preview, setPreview] = useState({ id: 1, img: "/prewed/prewed1.png" });
  const gallery = [
    { id: 1, img: "/prewed/prewed1.png" },
    { id: 2, img: "/prewed/prewed2.webp" },
    { id: 3, img: "/prewed/prewed3.webp" },
    { id: 4, img: "/prewed/prewed1.png" },
    { id: 5, img: "/prewed/prewed2.webp" },
  ];

  const previewAction = (item) => {
    setPreview(item);
  };

  return (
    <div className="relative flex flex-col justify-start items-center h-screen ">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 w-full h-full object-cover opacity-40"
        src="/song/bg_video.mp4"
      ></video>
      <p className="text-peachColor text-[50px] font-allura  leading-none mt-8">
        Gallery
      </p>

      <div className=" absolute top-[7.1rem] w-[100%]">
        <Image
          src={preview?.img}
          alt="banner"
          width={1000}
          height={1000}
          className="object-cover   w-[100%] h-[400px] "
        />
      </div>

      <div className=" absolute bottom-[16.5rem] flex gap-2 mt-2 overflow-x-scroll flex-nowrap ">
        {gallery?.map((item, index) => (
          <div
            className="shrink-0 "
            key={index}
            onClick={() => previewAction(item)}
          >
            <Image
              src={item?.img}
              alt="banner"
              width={1000}
              height={1000}
              className="object-cover   w-[130px] h-[130px] "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
