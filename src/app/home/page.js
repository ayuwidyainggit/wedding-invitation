"use client";
import React, { useEffect, useState } from "react";

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
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import MyHome from "../components/MyHome";

const Page = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (!audio) {
      const audioElement = new Audio("/song/song.mp3");
      audioElement.loop = true;
      setAudio(audioElement);
      audioElement
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Error playing audio:", err));
    }
    return () => {
      if (audio) {
        audio.pause();
      }
    };
  }, [audio]);

  const togglePlay = () => {
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="h-auto bg-white">
      <MyHome />
      <div className="relative mt-[12px] z-50">
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

      <div className="sticky bottom-6">
        <Menu />
      </div>

      <button
        className="fixed flex justify-center items-center top-6 right-6  w-[40px] h-[40px] rounded-full bg-peachColor"
        onClick={togglePlay}
      >
        {isPlaying ? <MdMusicOff /> : <MdMusicNote />}
      </button>
    </div>
  );
};

export default Page;
