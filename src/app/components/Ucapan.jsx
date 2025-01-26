"use client";

import React from "react";

const Ucapan = () => {
  const ucapanData = [
    { nama: "Irsalina", pesan: "Congratsss!" },
    { nama: "Ayu", pesan: "Semoga bahagia selalu!" },
    { nama: "Rizky", pesan: "Selamat menempuh hidup baru!" },
  ];

  return (
    <div className="flex justify-center">
      <div className="text-center bg-peachColor w-[350px] h-auto flex flex-col items-center">
        {ucapanData.map((ucapan, index) => (
          <div key={index} className="text-left px-2 my-2">
            <div className="px-2">
              <p className="text-gray-600">{ucapan.nama} :</p>
            </div>
            <div className="bg-white opacity-40 my-1 py-7 w-[350px] text-left px-2">
              <p className="text-gray-500">{ucapan.pesan}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ucapan;
