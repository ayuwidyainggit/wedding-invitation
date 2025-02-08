"use client";
import React from "react";
import Home from "../components/Home";
import Brides from "../components/Brides";
import Schedule from "../components/Schedule";
import Ceremony from "../components/Ceremony";
import Party from "../components/Party";
import Story from "../components/Story";
import Gallery from "../components/Gallery";
import Gift from "../components/Gift";
import Message from "../components/Message";
import Ucapan from "../components/Ucapan";
import Footer from "../components/Footer";
import Menu from "../components/Menu";
import { MdMusicNote } from "react-icons/md";
import { MdMusicOff } from "react-icons/md";

const page = () => {
  return (
    <div className=" h-auto bg-white">
      <Home />
      <div className="relative mt-[12px]  z-50">
        <Brides />
      </div>
      <Schedule />
      <Ceremony />
      <Party />
      <Story />
      <Gallery />
      <Gift />
      <Message />
      <Ucapan />
      <Footer />

      <div className=" sticky bottom-6 z-50">
        <Menu />
      </div>

      <div className=" fixed flex justify-center items-center top-6 right-6  z-50 w-[40px] h-[40px]  rounded-full bg-peachColor">
        <MdMusicNote />
      </div>
    </div>
  );
};

export default page;
