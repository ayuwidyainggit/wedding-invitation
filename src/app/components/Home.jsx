"use client";
import Image from "next/image";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
      <div
        className="absolute -bottom-2.5 w-full "
        style={{
          x: horizontalMovementRight, // Posisi horizontal berdasarkan scroll
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff8f8"
            fill-opacity="1"
            d="M0,0L34.3,5.3C68.6,11,137,21,206,58.7C274.3,96,343,160,411,197.3C480,235,549,245,617,218.7C685.7,192,754,128,823,96C891.4,64,960,64,1029,101.3C1097.1,139,1166,213,1234,218.7C1302.9,224,1371,160,1406,128L1440,96L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
          ></path>
        </svg>
      </div>

      <motion.div className="absolute w-[350px] top-[500px]">
        <motion.div
          className=""
          style={{
            x: horizontalMovementRight, // Posisi horizontal berdasarkan scroll
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
        >
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
          <p className=" text-white text-center text-base"> 11 Mei 2025</p>
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
          <div className="w-[10px] h-[10px] rounded-full bg-white"></div>
          <div className="w-[5px] h-[5px] rounded-full bg-white"></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
