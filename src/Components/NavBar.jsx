import React from "react";

function NavBar() {
  return (
    <div className="w-full mx-auto">
      <div className="sm:text-lg m-auto w-full max-w-[1000px] h-[70px] flex justify-between items-center px-10 text-base text-[#AAA] z-1">
        <span className="flex group cursor-pointer">
          <img
            className="p-2"
            src="/logo.png"
            alt="Logo"
            style={{ width: "50px", zIndex: "12", position: "relative" }}
          />
          <h1 className="hidden sm:block pl-3 m-auto">Dhyan</h1>
        </span>
        <ul className="flex">
          <li className="px-2 mr-2 border-2 border-[#aaa] rounded-md sm:px-4 md:px-6 hover:scale-110 duration-300 hover:text-white">
            Music
          </li>
          <li className="px-2 ml-2 border-2 border-[#aaa] hover:scale-110 duration-300 hover:text-white rounded-md  sm:px-4 md:px-6">
            Settings
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
