import React from "react";
import optionStore from "../store/option";

function Options() {
  const store = optionStore();
  return (
    <div className="w-full mx-auto text-[#fefefe]">
      <div className="max-w-[1000px] flex m-auto w-full">
        <div className="mx-auto flex justify-evenly mt-10 mb-10 text-base sm:text-xl md:text-2xl">
          <button
            className={store.mode === "focus"? "rounded-lg mx-3 sm:mx-7 px-3 sm:px-5 py-2 scale-110 bg-[#5f1183]":"hover:scale-110 duration-300 mx-3 sm:mx-7 px-3 sm:px-5 py-2"}
            onClick={store.handleOnClick}
            value={"focus"}>
            Dhyan
          </button>
          <button
            className={store.mode === "sbreak"? "rounded-lg mx-3 sm:mx-7 px-3 sm:px-5 py-2 scale-110 bg-[rgb(95,17,131)]":"hover:scale-110 duration-300 mx-3 sm:mx-7 px-3 sm:px-5 py-2"}
            onClick={store.handleOnClick}
            value={"sbreak"}>
            Short Break
          </button>
          <button
            className={store.mode === "lbreak"? "rounded-lg mx-3 sm:mx-7 px-3 sm:px-5 py-2 scale-110 bg-[#5f1183]":"hover:scale-110 duration-300 mx-3 sm:mx-7 px-3 sm:px-5 py-2"}
            onClick={store.handleOnClick}
            value={"lbreak"}>
            Long Break
          </button>
        </div>
      </div>
    </div>
  );
}

export default Options;
