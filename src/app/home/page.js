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

const page = () => {
  return (
    <div className=" h-auto bg-white">
      <Home />
      <div className="relative -mt-[20px] z-50">
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
    </div>
  );
};

export default page;
