import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" flex flex-col  items-center pb-7">
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

      <p className="font-allura text-primary text-center text-3xl">
        Thank You !
      </p>
    </div>
  );
};

export default Footer;
