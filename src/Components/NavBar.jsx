import React from "react";
import { BsMusicNote } from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import logo from "../assets/logo.png"

function NavBar() {
  return (
    <div className="w-full mx-auto">
      <div className="sm:text-lg md:text-xl m-auto w-full max-w-[1000px] h-[100px] flex justify-between items-center px-10 text-[#AAA] z-1">
        <span className="flex group cursor-pointer">
          <img
            className="p-2"
            src={logo}
            alt="Logo"
            style={{ width: "50px", position: "relative" }}
          />
          <h1 className="hidden sm:block text-2xl pl-3 m-auto">Dhyan</h1>
        </span>
        <ul className="flex">
          <li className="px-2 mr-3 border-2 border-[#aaa] rounded-md sm:px-4 md:px-6 py-2 hover:scale-110 duration-300 hover:text-white">
          <div className="flex">
            <BsMusicNote className="mr-1 mt-1"/>
            Music
            </div>
          </li>
          <li className="px-2 ml-2 border-2 border-[#aaa] hover:scale-110 duration-300 py-2 hover:text-white rounded-md  sm:px-4 md:px-6">
            <div className="flex">
              <AiFillSetting className="mr-1 mt-1" />
              Settings
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
