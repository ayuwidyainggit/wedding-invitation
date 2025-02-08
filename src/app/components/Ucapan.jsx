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

  const colors = ["#cdb4db", "#ffc8dd", "#ffafcc", "#bde0fe", "#a2d2ff"];
  const itemsPerPage = 7;
  const [currentPage, setCurrentPage] = useState(1);

  // Hitung total halaman
  const totalPages = Math.ceil(ucapanData.length / itemsPerPage);

  // Data yang ditampilkan per halaman
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = ucapanData.slice(startIndex, startIndex + itemsPerPage);

  console.log("Current Page:", currentPage);
  console.log("Total Page:", totalPages);

  const goToPreviousPage = () => {
    setCurrentPage((prev) => {
      console.log("Prev Page:", Math.max(prev - 1, 1));
      return Math.max(prev - 1, 1);
    });
  };

  const goToNextPage = () => {
    setCurrentPage((prev) => {
      console.log("Next Page:", Math.min(prev + 1, totalPages));
      return Math.min(prev + 1, totalPages);
    });
  };

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

      <div className="w-[90%] space-y-4 h-[600px] ">
        {currentData.map((ucapan, index) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)];
          return (
            <div key={index} className="relative flex gap-4">
              <div
                style={{ backgroundColor: randomColor }}
                className="rounded-full w-[55px] h-[55px] flex justify-center items-center text-white font-bold"
              >
                <p>{ucapan.nama.charAt(0)}</p>
              </div>

              <div className="relative bg-white w-[80%] shadow-md p-3 rounded-lg before:absolute before:-left-2 before:top-4 before:w-4 before:h-4 before:bg-white before:rotate-45 before:shadow-md">
                <p className="font-bold text-gray-500">{ucapan.nama}</p>
                <p className="text-sm text-gray-500">{ucapan.pesan}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination Controls */}
      <div className="absolute bottom-8 flex gap-4 mt-4">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className={`flex justify-center items-center w-[40px] h-[40px] rounded-full ${
            currentPage === 1 ? "bg-gray-300 " : "bg-peachColor text-white"
          }`}
        >
          <GrPrevious />
        </button>
        <span className="text-peachColor">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className={` flex justify-center items-center w-[40px] h-[40px] rounded-full ${
            currentPage === totalPages
              ? "bg-gray-300 "
              : "bg-peachColor text-white"
          }`}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default Ucapan;
