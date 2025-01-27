import Image from "next/image";
import React from "react";

const Brides = () => {
  return (
    <div className=" flex justify-center bg-babypink2 -mt-3 ">
      <div className="text-center   rounded-t-xl flex flex-col items-center">
        <p className=" text-purpleColor text-[35px] mt-10 leading-none">
          Meet The Happy Couple
        </p>
        <p className=" text-gray-500">
          Glory be to Allah SWT who has created creatures in pairs. Ya Allah,
          please accept and bless us
        </p>
        <div className=" flex justify-center my-10">
          <Image
            src="/arip.jpg"
            alt="banner"
            width={1000}
            height={1000}
            className="object-cover h-[200px] w-[200px] shadow-pink rounded-full"
          />
        </div>
        <p className=" text-purpleColor text-center  font-allura  font-extrabold text-[40px]">
          Arif Aminudin
        </p>
        <p className=" text-gray-400 ">Son of </p>
        <p className=" text-gray-600 ">Ngajiyono & Sumiyati </p>
        <div className=" flex justify-center my-10">
          <Image
            src="/ayu.jpg"
            alt="banner"
            width={1000}
            height={1000}
            className="object-cover h-[200px] w-[200px] shadow-pink rounded-full"
          />
        </div>
        <p className=" text-purpleColor text-center  font-allura  font-extrabold text-[40px]">
          Ayu Widya Inggit
        </p>
        <p className=" text-gray-400 ">Doughter of </p>
        <p className=" text-gray-600 ">Ngajiyono & Sumiyati </p>

        <button className="bg-primary p-3 rounded-md flex flex-col items-center w-[184px] mt-[30px] mb-[50px]">
          <p className=" text-white text-sm">Our Story</p>
        </button>
      </div>
    </div>
  );
};

export default Brides;
