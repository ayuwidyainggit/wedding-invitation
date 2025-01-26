import Image from "next/image";
import React from "react";

const Ceremony = () => {
  return (
    <div className=" flex justify-center">
      <div className=" relative text-center bg-peachColor w-[350px] h-auto flex flex-col items-center">
        <Image
          src="/ring.jpg"
          alt="banner"
          width={1000}
          height={1000}
          className="object-cover h-[500px] w-[350px]  opacity-45 "
        />

        <div className="absolute mt-6">
          <Image
            src="/icon/wedding-ring.png"
            alt="banner"
            width={1000}
            height={1000}
            className="object-cover h-[60px] w-[60px]"
          />
        </div>
        <div className="absolute mt-[100px]">
          <p className=" text-3xl font-semibold text-white">Wedding Ceremony</p>
        </div>
        <div className="absolute mt-[150px]">
          <p className=" text-xl  text-white">07.00 - 08.00</p>
        </div>
        <div className="absolute mt-[200px]">
          <p className=" text-3xl font-semibold text-white">Raffles Hotel</p>
        </div>
        <div className=" absolute mt-[250px]">
          <p className=" text-xl  text-white">
            Jl. Terusan Jakarta No.53, Cicaheum, Kec. Kiaracondong, Kota
            Bandung, Jawa Barat 40291
          </p>
        </div>

        <button className="absolute bg-primary p-3 rounded-md flex flex-col items-center w-[184px]  mt-[350px]">
          <p className=" text-white text-sm">Open Map</p>
        </button>
      </div>
    </div>
  );
};

export default Ceremony;
