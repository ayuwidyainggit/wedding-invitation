"use client";

import React, { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const Ucapan = () => {
  const ucapanData = [
    { nama: "Irsalina", pesan: "Congratsss!" },
    { nama: "Ayu", pesan: "Semoga bahagia selalu!" },
    { nama: "Rizky", pesan: "Selamat menempuh hidup baru!" },
    { nama: "Budi", pesan: "Barakallah!" },
    { nama: "Dina", pesan: "Best wishes for you!" },
    { nama: "Eka", pesan: "Sakinah, mawadah, warahmah!" },
    { nama: "Farhan", pesan: "Semoga langgeng!" },
    { nama: "Gita", pesan: "Bahagia selalu!" },
    { nama: "Hadi", pesan: "Congrats guys!" },
    { nama: "Indah", pesan: "Semoga rezekinya lancar!" },
  ];

  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  // Hitung total halaman
  const totalPages = Math.ceil(ucapanData.length / itemsPerPage);

  // Data yang ditampilkan per halaman
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = ucapanData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 w-full h-full object-cover opacity-40"
        src="/song/bg_video.mp4"
      ></video>
      <p className="text-purpleColor text-[50px] font-allura  leading-none mb-7">
        Wishes
      </p>

      <div className="w-[90%] space-y-4">
        {currentData.map((ucapan, index) => (
          <div key={index} className="relative flex gap-4 ">
            <div className="bg-peachColor rounded-full w-[55px] h-[55px] flex justify-center items-center">
              <p>{ucapan.nama.charAt(0)}</p>
            </div>

            <div className="relative bg-white w-[80%] shadow-md p-3 rounded-lg before:absolute before:-left-2 before:top-4 before:w-4 before:h-4 before:bg-white before:rotate-45 before:shadow-md">
              <p className="font-bold text-gray-500">{ucapan.nama}</p>
              <p className="text-sm text-gray-500">{ucapan.pesan}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`flex justify-center items-center w-[40px] h-[40px] rounded-full ${
            currentPage === 1
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purpleColor text-white"
          }`}
        >
          <GrPrevious />
        </button>
        <span className="text-purpleColor">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={` flex justify-center items-center w-[40px] h-[40px] rounded-full ${
            currentPage === totalPages
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-purpleColor text-white"
          }`}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Ucapan;
