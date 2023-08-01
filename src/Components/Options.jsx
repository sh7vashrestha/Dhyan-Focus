import React from "react";
import optionStore from "../store/option";
import useSound from "use-sound";
import slideSfx from "../sounds/slide.mp3";

function Options() {
  const store = optionStore();
  const [slide] = useSound(slideSfx);
  const handelClick = (item) =>{
    slide();
    store.handleOnClick(item);
  }
  return (
    <div className="w-full mx-auto text-[#fefefe]">
      <div className="max-w-[1000px] flex m-auto w-full">
        <div className="mx-auto flex justify-evenly my-5 text-base sm:text-xl md:text-2xl">
          <button
            className={
              store.mode === "focus"
                ? "rounded-lg mx-3 sm:mx-7 px-3 sm:px-5 py-2 scale-110 bg-[#5f1183]"
                : "hover:scale-110 duration-300 mx-3 sm:mx-7 px-3 sm:px-5 py-2"
            }
            onClick={handelClick}
            value={"focus"}>
            Dhyan
          </button>
          <button
            className={
              store.mode === "sbreak"
                ? "rounded-lg mx-3 sm:mx-7 px-3 sm:px-5 py-2 scale-110 bg-[rgb(95,17,131)]"
                : "hover:scale-110 duration-300 mx-3 sm:mx-7 px-3 sm:px-5 py-2"
            }
            onClick={handelClick}
            value={"sbreak"}>
            Short Break
          </button>
          <button
            className={
              store.mode === "lbreak"
                ? "rounded-lg mx-3 sm:mx-7 px-3 sm:px-5 py-2 scale-110 bg-[#5f1183]"
                : "hover:scale-110 duration-300 mx-3 sm:mx-7 px-3 sm:px-5 py-2"
            }
            onClick={handelClick}
            value={"lbreak"}>
            Long Break
          </button>
        </div>
      </div>
    </div>
  );
}

export default Options;
