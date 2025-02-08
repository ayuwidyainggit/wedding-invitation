"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Cover from "./components/Cover";
import Gallery from "./components/Gallery";
import Brides from "./components/Brides";
import Schedule from "./components/Schedule";
import Ceremony from "./components/Ceremony";
import Party from "./components/Party";
import Story from "./components/Story";
import Gift from "./components/Gift";
import Message from "./components/Message";
import Ucapan from "./components/Ucapan";
import Footer from "./components/Footer";
import MyHome from "./components/Home";
import Menu from "./components/Menu";
import { MdMusicNote, MdMusicOff } from "react-icons/md";

export default function Home() {
  const [isAnimating, setIsAnimating] = useState(null); // Awalnya null (belum ada animasi)
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);

  const handleOpen = () => {
    setIsAnimating(true); // Animasi hanya dimulai setelah tombol ditekan
    togglePlay();
  };

  const togglePlay = () => {
    if (!audio) {
      const audioElement = new Audio("/song/song.mp3");
      audioElement.loop = true;
      setAudio(audioElement);
      audioElement
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.error("Error playing audio:", err));
    } else {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative">
      {isAnimating !== null && (
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

          <div className="sticky bottom-6 z-50">
            <Menu />
          </div>

          <button
            className="fixed flex justify-center items-center top-6 right-6 z-50 w-[40px] h-[40px] rounded-full bg-peachColor"
            onClick={togglePlay}
          >
            {isPlaying ? <MdMusicOff /> : <MdMusicNote />}
          </button>
        </div>
      )}

      {/* Cover hanya bergerak saat tombol diklik */}
      {isAnimating === null && (
        <div className="absolute top-0 left-0 w-full h-[100vh] bg-white">
          <Cover onButtonClick={handleOpen} />
        </div>
      )}

      {isAnimating && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: "-100vh" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-full h-[100vh] bg-white"
        >
          <Cover onButtonClick={handleOpen} />
        </motion.div>
      )}
    </div>
  );
}
