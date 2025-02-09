import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { IoMdPhotos } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { BsCalendarDate, BsFillGiftFill } from "react-icons/bs";
import { IoHeart } from "react-icons/io5";

const Menu = ({ activeSection }) => {
  const handleNavigation = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-peachColor flex gap-4 px-4 items-center justify-between shadow-lg rounded-full w-[250px] h-[50px]">
        <button
          onClick={() => handleNavigation("brides")}
          className={
            activeSection === "brides"
              ? "text-peachColor bg-white p-2 rounded-md"
              : ""
          }
        >
          <IoHeart />
        </button>
        <button
          onClick={() => handleNavigation("schedule")}
          className={
            activeSection === "schedule"
              ? "text-peachColor bg-white p-2 rounded-md"
              : ""
          }
        >
          <BsCalendarDate />
        </button>
        <button
          onClick={() => handleNavigation("gallery")}
          className={
            activeSection === "gallery"
              ? "text-peachColor bg-white p-2 rounded-md"
              : ""
          }
        >
          <IoMdPhotos />
        </button>

        <button
          onClick={() => handleNavigation("ceremony")}
          className={
            activeSection === "ceremony"
              ? "text-peachColor bg-white p-2 rounded-md"
              : ""
          }
        >
          <FiEdit />
        </button>
      </div>
    </div>
  );
};

export default Menu;
