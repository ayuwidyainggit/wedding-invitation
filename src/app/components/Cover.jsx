"use client";
import Image from "next/image";
import React from "react";
import { useSearchParams } from "next/navigation"; // Import useSearchParams

const Cover = ({ onButtonClick }) => {
  const searchParams = useSearchParams(); // Ambil query parameter
  const to = searchParams.get("to") || "Bpk / Ibu Pemirsa"; // Ambil 'to' atau default "Irsalina"

  return (
    <div className="relative bg-[#fff8f8] h-screen flex flex-col justify-center items-center">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 w-full h-full object-cover opacity-40"
        src="/song/1.mp4"
      ></video>

      <div className="absolute top-60">
        <p className="text-gray-600 text-center text-[20px]">The wedding of</p>

        <p className="text-gray-600 text-center font-allura text-[60px]">
          Arif & Ayu
        </p>
        <p className="text-gray-600 text-center text-[17px]">
          Sunday, 11 May 2025
        </p>

        {/* Menampilkan 'to' jika ada */}
        <p className="text-gray-600 text-center text-[17px]">To: {to}</p>
      </div>

      <div className="absolute bottom-[200px]">
        <button
          onClick={onButtonClick}
          className="bg-peachColor p-3 rounded-full flex flex-col items-center w-[184px]"
        >
          <Image
            src="/icon/invitation.png"
            alt="banner"
            width={1000}
            height={1000}
            className="object-cover w-[20px] h-[20px] shadow-pink"
          />

          <p className="text-white text-sm">Open Invitation</p>
        </button>
      </div>
    </div>
  );
};

export default Cover;
