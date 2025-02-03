import React from "react";
import { FcLikePlaceholder } from "react-icons/fc";
import { IoMdPhotos } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { BsCalendarDate } from "react-icons/bs";
import { BsFillGiftFill } from "react-icons/bs";

const Menu = () => {
  return (
    <div className=" flex justify-center">
      <div className=" bg-peachColor flex gap-4 px-4  items-center  justify-between shadow-lg rounded-full w-[250px] h-[50px] ">
        <FcLikePlaceholder />
        <IoMdPhotos />
        <FiEdit />
        <BsCalendarDate />
        <BsFillGiftFill />
      </div>
    </div>
  );
};

export default Menu;
