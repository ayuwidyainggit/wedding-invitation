import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className=" bg-babypink2 flex justify-center  items-center pb-7">
      <Image
        src="/icon/flower.png"
        alt="banner"
        width={1000}
        height={1000}
        className=" h-[100px] w-[100px] "
      />

      <p className="font-allura text-primary text-center text-3xl">
        Thank You !
      </p>

      <Image
        src="/icon/flower.png"
        alt="banner"
        width={1000}
        height={1000}
        className=" h-[100px] w-[100px] "
      />
    </div>
  );
};

export default Footer;
