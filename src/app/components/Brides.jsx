"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Brides = () => {
  const sectionRefRight = useRef(null);
  const sectionRefLeft = useRef(null);

  // Scroll untuk horizontalMovementRight
  const { scrollYProgress: scrollRight } = useScroll({
    target: sectionRefRight,
    offset: ["start end", "end start"],
  });
  const rawHorizontalMovementRight = useTransform(
    scrollRight,
    [0, 0.1],
    ["-80vw", "0vw"]
  );
  const horizontalMovementRight = useSpring(rawHorizontalMovementRight, {
    stiffness: 90,
    damping: 20,
  });

  // Scroll untuk horizontalMovementLeft
  const { scrollYProgress: scrollLeft } = useScroll({
    target: sectionRefLeft,
    offset: ["start end", "end start"],
  });
  const rawHorizontalMovementLeft = useTransform(
    scrollLeft,
    [0, 0.1],
    ["80vw", "0vw"]
  );
  const horizontalMovementLeft = useSpring(rawHorizontalMovementLeft, {
    stiffness: 90,
    damping: 20,
  });

  return (
    <div className="relative flex flex-col justify-center bg-babypink2 -mt-3 overflow-x-hidden">
      <div className="text-center rounded-t-xl flex flex-col items-center">
        <motion.p
          className="text-peachColor text-[35px] mt-10 leading-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          Meet The Happy Couple
        </motion.p>
        <motion.p
          className="text-gray-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          Glory be to Allah SWT who has created creatures in pairs. Ya Allah,
          please accept and bless us
        </motion.p>

        {/* Animasi untuk Gambar Kanan */}
        <motion.div
          ref={sectionRefRight}
          className="relative flex justify-center my-10"
          style={{ x: horizontalMovementRight }}
        >
          <Image
            src="/male.jpg"
            alt="banner"
            width={1000}
            height={1000}
            className="object-cover h-[400px] w-[200px] shadow-pink rounded-t-full border-4 border-white shadow-lg"
          />
          <div className="absolute -top-10">
            <Image
              src="/icon/flower2.png"
              alt="banner"
              width={1000}
              height={1000}
              className="object-cover h-[120px] w-[120px]"
            />
          </div>
          <div className="absolute bottom-0 -left-10">
            <Image
              src="/icon/flower1.png"
              alt="banner"
              width={1000}
              height={1000}
              className="object-cover h-[120px] w-[120px]"
            />
          </div>
        </motion.div>

        <motion.p
          className="text-peachColor text-center font-allura font-extrabold text-[40px]"
          style={{ x: horizontalMovementRight }}
        >
          Arif Aminudin
        </motion.p>
        <motion.p
          className="text-gray-400"
          style={{ x: horizontalMovementRight }}
        >
          Son of{" "}
        </motion.p>
        <motion.p
          className="text-gray-600"
          style={{ x: horizontalMovementRight }}
        >
          Ngajiyono & Sumiyati{" "}
        </motion.p>

        {/* Animasi untuk Gambar Kiri */}
        <motion.div
          ref={sectionRefLeft}
          className="relative flex justify-center my-10"
          style={{ x: horizontalMovementLeft }}
        >
          <Image
            src="/female.webp"
            alt="banner"
            width={1000}
            height={1000}
            className="object-cover h-[400px] w-[200px] shadow-pink rounded-t-full border-4 border-white"
          />
          <div className="absolute bottom-0 -right-10">
            <Image
              src="/icon/flower1.png"
              alt="banner"
              width={1000}
              height={1000}
              className="object-cover h-[120px] w-[120px] transform scale-x-[-1]"
            />
          </div>
          <div className="absolute -top-10">
            <Image
              src="/icon/flower2.png"
              alt="banner"
              width={1000}
              height={1000}
              className="object-cover h-[120px] w-[120px]"
            />
          </div>
        </motion.div>

        <motion.p
          className="text-peachColor text-center font-allura font-extrabold text-[40px]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
        >
          Ayu Widya Inggit
        </motion.p>
        <p className="text-gray-400">Daughter of </p>
        <p className="text-gray-600">Ngajiyono & Sumiyati </p>

        <motion.button
          className="bg-peachColor  p-3   rounded-md flex flex-col items-center w-[184px] mt-[30px] mb-[50px]"
          whileHover={{
            scale: 1.05, // Membesarkan button saat hover
            boxShadow: "0px 10px 20px rgba(213, 167, 175, 0.8)", // Bayangan lembut saat hover
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <p className="text-white text-sm">Our Story</p>
        </motion.button>
      </div>
    </div>
  );
};

export default Brides;
