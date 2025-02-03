"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Schedule = () => {
  const [timeLeft, setTimeLeft] = useState(null); // Awalnya null
  const [isVisible, setIsVisible] = useState(true); // State untuk mendeteksi visibilitas

  const calculateTimeLeft = () => {
    const targetDate = new Date("2025-05-11T07:00:00");
    const now = new Date();
    const difference = targetDate - now;

    if (difference > 0) {
      return [
        { note: "D", timer: Math.floor(difference / (1000 * 60 * 60 * 24)) },
        { note: "H", timer: Math.floor((difference / (1000 * 60 * 60)) % 24) },
        { note: "M", timer: Math.floor((difference / (1000 * 60)) % 60) },
        { note: "S", timer: Math.floor((difference / 1000) % 60) },
      ];
    } else {
      return [
        { note: "D", timer: 0 },
        { note: "H", timer: 0 },
        { note: "M", timer: 0 },
        { note: "S", timer: 0 },
      ];
    }
  };

  useEffect(() => {
    if (isVisible) {
      setTimeLeft(calculateTimeLeft());
      const countdown = setInterval(() => {
        setTimeLeft(calculateTimeLeft());
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [isVisible]);

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    setIsVisible(inView); // Perbarui status visibilitas saat elemen masuk atau keluar layar
  }, [inView]);

  const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding+Celebration&dates=20250511T020000Z/20250511T050000Z&details=By+asking+for+the+grace+and+blessing+of+Allah+SWT.+We+intend+to+hold+a+wedding+celebration+for+our+sons+and+daughters.&location=Your+Location&sf=true&output=xml`;

  return (
    <div className="relative flex justify-center h-screen">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 w-full h-full object-cover opacity-40"
        src="/song/bg_video.mp4"
      ></video>

      <div className="text-center flex flex-col items-center ">
        <p className="text-purpleColor text-[35px] mt-[15rem] leading-none">
          We’re Getting Married
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
          {timeLeft &&
            timeLeft.map((item, index) => (
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
          className="bg-peachColor  p-3 rounded-md flex flex-col items-center w-[184px] mt-[30px] mb-[50px]"
        >
          <p className="text-white text-sm">Add to Google Calendar</p>
        </a>
      </div>
    </div>
  );
};

export default Schedule;
