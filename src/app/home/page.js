import React from "react";
import Home from "../components/Home";
import Brides from "../components/Brides";

const page = () => {
  return (
    <div className=" h-auto bg-white">
      <Home />
      <div className="relative -mt-[20px] z-50">
        <Brides />
      </div>
    </div>
  );
};

export default page;
