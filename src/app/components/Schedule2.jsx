"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Schedule2 = () => {
  const [timeLeft, setTimeLeft] = useState([
    { note: "D", timer: 0 },
    { note: "H", timer: 0 },
    { note: "M", timer: 0 },
    { note: "S", timer: 0 },
  ]);

  useEffect(() => {
    const targetDate = new Date("2025-05-11T07:00:00");

    const countdown = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft([
          { note: "D", timer: days },
          { note: "H", timer: hours },
          { note: "M", timer: minutes },
          { note: "S", timer: seconds },
        ]);
      } else {
        clearInterval(countdown);
        setTimeLeft([
          { note: "D", timer: 0 },
          { note: "H", timer: 0 },
          { note: "M", timer: 0 },
          { note: "S", timer: 0 },
        ]);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  const calendarUrl = https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding+Celebration&dates=20250511T020000Z/20250511T050000Z&details=By+asking+for+the+grace+and+blessing+of+Allah+SWT.+We+intend+to+hold+a+wedding+celebration+for+our+sons+and+daughters.&location=Your+Location&sf=true&output=xml;

  // Gunakan useInView untuk mendeteksi kapan countdown masuk ke layar
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya berjalan sekali
    threshold: 0.2, // Berjalan ketika 20% elemen terlihat
  });

  return (
    <div className="relative flex justify-center h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 w-full h-full object-cover opacity-40"
        src="/song/bg_video.mp4"
      ></video>

      <div className="text-center flex flex-col items-center border border-red-500">
        <p className="text-purpleColor text-[35px] mt-[15rem] leading-none">
          We’r Getting Merried
        </p>

        <p className="font-allura text-gray-600 text-2xl mt-4">
          Assalamualaikum
        </p>
        <p className="font-allura text-gray-600 text-2xl mb-4">
          Warrohmatullah Wabarrakatuhu
        </p>

        <p className="text-gray-600">
          By asking for the grace and blessing of Allah SWT. We intend to hold a
          wedding celebration for our sons and daughters, which Allah SWT
          willing will be held on:
        </p>

        <p className="text-gray-600 font-semibold text-xl my-4">11 Mei 2025</p>

        {/* Countdown */}
        <motion.div
          ref={ref}
          className="flex gap-4"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.5 } },
          }}
        >
          {timeLeft?.map((item, index) => (
            <motion.div
              key={index}
              className="bg-peachColor py-5 rounded-md bg-opacity-40 w-[70px] shadow shadow-md"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-lg text-purpleColor">{item.timer}</p>
              <p className="text-lg text-purpleColor">{item.note}</p>
            </motion.div>
          ))}
        </motion.div>

        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary p-3 rounded-md flex flex-col items-center w-[184px] mt-[30px] mb-[50px]"
        >
          <p className="text-white text-sm">Add to Google Calendar</p>
        </a>
      </div>
    </div>
  );
};

export default Schedule2;