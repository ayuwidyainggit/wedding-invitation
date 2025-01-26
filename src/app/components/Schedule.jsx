"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Schedule = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-05-11T07:00:00"); // 11 Mei 2025 pukul 09:00

    const countdown = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(countdown); // Jika waktu sudah lewat, hentikan interval
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(countdown); // Membersihkan interval saat komponen di-unmount
  }, []);

  const calendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=Wedding+Celebration&dates=20250511T020000Z/20250511T050000Z&details=By+asking+for+the+grace+and+blessing+of+Allah+SWT.+We+intend+to+hold+a+wedding+celebration+for+our+sons+and+daughters.&location=Your+Location&sf=true&output=xml`;

  return (
    <div className=" flex justify-center ">
      <div className="text-center bg-peachColor w-[350px] h-[700px]   flex flex-col items-center">
        <div className="flex items-center ">
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

        <p className=" text-purpleColor text-[35px] mt-10 leading-none">
          We’r Getting Merried
        </p>

        <p className="font-allura text-gray-600 text-2xl mt-4">
          Assalamualaikum
        </p>
        <p className="font-allura text-gray-600 text-2xl mb-4">
          Warrohmatullah Wabarrakatuhu
        </p>

        <p className="text-gray-600 ">
          By asking for the grace and blessing of Allah SWT. We intend to hold a
          wedding celebration for our sons and daughters, which Allah SWT
          willing will be held on:
        </p>

        <p className="text-gray-600  font-semibold text-xl my-4">11 Mei 2025</p>

        {/* Countdown */}
        <div className="flex gap-4">
          <div className="bg-white p-5 rounded-md bg-opacity-40">
            <p className="text-lg text-purpleColor">{timeLeft.days}</p>
            <p className="text-lg text-purpleColor">D</p>
          </div>
          <div className="bg-white p-6 rounded-md bg-opacity-40">
            <p className="text-lg text-purpleColor">{timeLeft.hours}</p>
            <p className="text-lg text-purpleColor">H</p>
          </div>
          <div className="bg-white p-6 rounded-md bg-opacity-40">
            <p className="text-lg text-purpleColor">{timeLeft.minutes}</p>
            <p className="text-lg text-purpleColor">M</p>
          </div>
          <div className="bg-white p-6 rounded-md bg-opacity-40">
            <p className="text-lg text-purpleColor">{timeLeft.seconds}</p>
            <p className="text-lg text-purpleColor">S</p>
          </div>
        </div>

        <a
          href={calendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary p-3 rounded-md flex flex-col items-center w-[184px] mt-[30px] mb-[50px]"
        >
          <p className=" text-white text-sm">Add to Google Calendar</p>
        </a>
      </div>
    </div>
  );
};

export default Schedule;
