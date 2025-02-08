"use client";
import Image from "next/image";
import React, { useState } from "react";

const Story = () => {
  const [story, setStory] = useState([
    { id: 1, img: "/prewed/prewed1.png", story: "The Begining" },
    { id: 2, img: "/prewed/prewed2.webp", story: "First Date" },
    { id: 3, img: "/prewed/prewed3.webp", story: "The Proposal" },
    { id: 4, img: "/prewed/prewed1.png", story: "Our Wedding" },
  ]);
  return (
    <div className="bg-peachColor   h-[600px]">
      <div className="relative flex flex-col  items-center h-[400px]  w-[90%] left-[5%] p-2 ">
        <div className="absolute w-[380px] h-[500px]  top-12 ">
          <Image
            src="/prewed/story.png"
            alt="banner"
            width={1000}
            height={1000}
            className="object-cover   w-[380px] h-[500px] "
          />
        </div>
        <div className="absolute   top-[8rem]">
          <p className="font-allura text-peachColor text-center font-bold text-5xl mt-4">
            Our Story
          </p>
        </div>

        <div className=" absolute flex   gap-3 overflow-x-scroll flex-nowrap  p-4 w-[376px] h-[480px]  rounded-t-full top-[63px] ">
          {story?.map((item, index) => (
            <div key={index} className="shrink-0 mt-[160px]">
              <Image
                src={item?.img}
                alt="banner"
                width={1000}
                height={1000}
                className="object-cover h-[120px] w-[120px] rounded-full "
              />
              <p className=" text-peachColor text-center   mt-4">
                {item?.story}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Story;
