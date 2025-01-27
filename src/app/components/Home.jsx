"use client";
import Image from "next/image";
import React from "react";
import {
  motion,
  animate,
  useScroll,
  useMotionValue,
  useTransform,
} from "framer-motion";

const Home = () => {
  // Hook untuk mendapatkan progres scroll
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], ["0deg", "180deg"]);
  const rotateTransform = useTransform(scrollYProgress, [0, 500], [0, 90]); // Mengonversi scroll ke rotasi

  const horizontalMovementRight = useTransform(
    scrollYProgress,
    [0, 1],
    ["-0vw", "700vw"]
  ); // Gerak horizontal

  const horizontalMovementLeft = useTransform(
    scrollYProgress,
    [0, 1],
    ["0vw", "-700vw"]
  );

  return (
    <div className="relative bg-gradient-to-b from-babypink2 to-peachColor h-screen flex flex-col justify-center items-center overflow-hidden">
      {/* Wedding Flower Image */}
      <motion.div
        className="absolute top-[20px] z-40"
        style={{
          rotate, // Rotasi akan diatur oleh progres scroll
        }}
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 2, // Animation duration in seconds
        }}
      >
        <Image
          src="/weddingflower.png"
          alt="banner"
          width={1000}
          height={1000}
          className="object-cover h-[500px] w-[500px]"
        />
      </motion.div>

      {/* Pre-wedding Image */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 4, // Animation duration in seconds
        }}
        className="absolute top-[80px] left-[55px]"
      >
        <Image
          src="/prewed1.jpg"
          alt="banner"
          width={1000}
          height={1000}
          className="object-cover h-[360px] w-[360px] rounded-full"
        />
      </motion.div>

      {/* SVG Wave Background at the Bottom */}
      <div className="absolute bottom-0 w-full">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff8f8"
            fillOpacity="1"
            d="M0,32L26.7,74.7C53.3,117,107,203,160,197.3C213.3,192,267,96,320,101.3C373.3,107,427,213,480,240C533.3,267,587,213,640,208C693.3,203,747,245,800,272C853.3,299,907,309,960,266.7C1013.3,224,1067,128,1120,85.3C1173.3,43,1227,53,1280,64C1333.3,75,1387,85,1413,90.7L1440,96L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="absolute w-[350px] top-[500px]">
        <motion.div
          className=""
          style={{
            x: horizontalMovementRight, // Posisi horizontal berdasarkan scroll
          }}
        >
          <p className=" text-white text-center font-bold text-base">
            Ya Allah the Most Loving
          </p>
          <p className=" text-white text-center text-sm mb-[20px]">
            With Your blessing, you brought us together in a holy marriage bond
          </p>
        </motion.div>
        <motion.div
          className="flex justify-center"
          style={{
            x: horizontalMovementLeft,
          }}
        >
          <p className=" text-white text-center my-[20px] text-xl">
            THE WEDDING OF
          </p>
        </motion.div>
        <motion.div
          className=" flex gap-2 justify-center "
          style={{
            x: horizontalMovementRight, // Posisi horizontal berdasarkan scroll
          }}
        >
          <div className="flex flex-col justify-start items-end">
            <Image
              src="/cover/c10.png"
              alt="banner"
              width={1000}
              height={1000}
              className="object-cover h-[30px] w-[30px] shadow-pink"
            />
            <Image
              src="/cover/c9.png"
              alt="banner"
              width={1000}
              height={1000}
              className="object-cover h-[20px] w-[20px] shadow-pink"
            />
          </div>
          <p className=" text-white text-center  font-allura  font-extrabold text-[50px]">
            Arif & Ayu
          </p>
          <div className="">
            <Image
              src="/cover/c1.png"
              alt="banner"
              width={1000}
              height={1000}
              className="object-cover h-[30px] w-[30px] shadow-pink"
            />
            <Image
              src="/cover/c2.png"
              alt="banner"
              width={1000}
              height={1000}
              className="object-cover h-[20px] w-[20px] shadow-pink"
            />
          </div>
        </motion.div>
        <motion.div
          className=" flex gap-2 items-center justify-center"
          style={{
            x: horizontalMovementRight, // Posisi horizontal berdasarkan scroll
          }}
        >
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
          <p className=" text-white text-center text-base"> 11 Mei 2025</p>
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
