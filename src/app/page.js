"use client";
import { useState, useEffect } from "react";
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

import Menu from "./components/Menu";
import { MdMusicNote, MdMusicOff } from "react-icons/md";
import { BsFillGiftFill } from "react-icons/bs";
import { MdContentCopy } from "react-icons/md";
import MyHome from "./components/MyHome";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("transfer");
  const address = "Jl Menur Tajeman RT 02 Palbapang Bantul. 55713";
  const [isAnimating, setIsAnimating] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [activeSection, setActiveSection] = useState("");
  const [isGiftModalOpen, setIsGiftModalOpen] = useState(false); // State untuk modal
  const accountNumber = "0374654949";
  const [copied, setCopied] = useState(false);

  const handleOpen = () => {
    setIsAnimating(true);
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

  const handleScroll = () => {
    const sections = ["gallery", "brides", "schedule", "ceremony", "gift"];
    for (let section of sections) {
      const el = document.getElementById(section);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
          setActiveSection(section);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset setelah 2 detik
    });
  };

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset setelah 2 detik
    });
  };

  return (
    <div className="">
      {isAnimating !== null && (
        <div className="h-auto bg-white">
          <MyHome />
          <section id="brides">
            <Brides />
          </section>
          <section id="schedule">
            <Schedule />
          </section>
          <section id="ceremony">
            <Ceremony />
          </section>
          <section id="party">
            <Party />
          </section>
          <section id="story">
            <Story />
          </section>
          <section id="gallery">
            <Gallery />
          </section>
          <section id="gift">
            <Gift />
          </section>
          <section id="message">
            <Message />
          </section>
          <section id="ucapan">
            <Ucapan />
          </section>
          <Footer />

          {/* Tombol Musik */}
          <button
            className="fixed flex justify-center items-center top-6 right-6 z-40 w-[40px] h-[40px] rounded-full bg-peachColor text-white"
            onClick={togglePlay}
          >
            {isPlaying ? <MdMusicOff /> : <MdMusicNote />}
          </button>

          {/* Tombol Gift */}
          <button
            className="fixed flex justify-center items-center top-20 right-6 z-40 w-[40px] h-[40px] rounded-full bg-peachColor text-white"
            onClick={() => setIsGiftModalOpen(true)}
          >
            <BsFillGiftFill />
          </button>

          {/* Modal Popup Gift */}
          {isGiftModalOpen && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
                <h2 className="text-xl font-bold text-center mb-4 text-gray-500">
                  Send a Gift
                </h2>
                <div className="mb-4">
                  <label className="flex items-center space-x-2 text-gray-500">
                    <input
                      type="radio"
                      name="giftMethod"
                      value="transfer"
                      checked={selectedOption === "transfer"}
                      onChange={() => setSelectedOption("transfer")}
                    />
                    <span>Direct Transfer</span>
                  </label>
                  <label className="flex items-center space-x-2 mt-2 text-gray-500">
                    <input
                      type="radio"
                      name="giftMethod"
                      value="sendGift"
                      checked={selectedOption === "sendGift"}
                      onChange={() => setSelectedOption("sendGift")}
                    />
                    <span>Send Gift</span>
                  </label>
                </div>
                {/* content */}
                {selectedOption === "transfer" ? (
                  <div>
                    <p className="text-gray-600 text-center">
                      You can send your gift to the bride and groom via this
                      bank account:
                    </p>
                    <div className="bg-gray-100 p-4 rounded-lg mt-4 text-center">
                      <p className="font-semibold text-gray-500">Bank BCA</p>
                      <div className="flex justify-center items-center gap-3">
                        <p className="text-lg font-bold text-gray-500">
                          0374654949
                        </p>
                        <button
                          onClick={handleCopy}
                          className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition"
                        >
                          <MdContentCopy size={20} />
                        </button>
                      </div>

                      <p className="text-gray-500">A/N Ayu Widya Inggit</p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="bg-gray-100 p-4 rounded-lg mt-4 text-center">
                      <div className=" flex justify-center gap-3">
                        <p className="font-semibold text-gray-500">
                          Jl Menur Tajeman RT 02 Palbapang Bantul. 55713
                        </p>

                        <button
                          onClick={handleCopyAddress}
                          className="bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition w-[35px] h-[35px]"
                        >
                          <MdContentCopy size={20} />
                        </button>
                      </div>

                      <p className="text-gray-500">087832171592</p>
                    </div>
                  </div>
                )}
                {/* end content */}
                <div className="flex justify-center mt-4">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded-lg"
                    onClick={() => setIsGiftModalOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {isAnimating === null && (
        <div className="absolute top-0 left-0 w-full h-[100vh] bg-white">
          <Cover onButtonClick={handleOpen} />
        </div>
      )}

      <div className="fixed bottom-6 left-0 w-full flex justify-center z-40">
        <Menu activeSection={activeSection} />
      </div>
    </div>
  );
}
