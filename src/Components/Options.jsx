import React from "react";
import optionStore from "../store/option";

function Options() {
  const store = optionStore();
  return (
    <div className="w-full mx-auto text-[#fefefe]">
      <div className="max-w-[1000px] flex m-auto w-full">
        <div className="mx-auto flex justify-evenly mt-20 mb-10 text-2xl">
          <button
            className={store.option === "focus"? "rounded-lg mx-7 px-5 py-2 scale-110 bg-[#5f1183]":"hover:scale-110 duration-300 mx-7 px-5 py-2"}
            onClick={store.handleOnClick}
            value={"focus"}>
            Pomodoro
          </button>
          <button
            className={store.option === "sbreak"? "rounded-lg mx-7 px-5 py-2 scale-110 bg-[#5f1183]":"hover:scale-110 duration-300 mx-7 px-5 py-2"}
            onClick={store.handleOnClick}
            value={"sbreak"}>
            Short Break
          </button>
          <button
            className={store.option === "lbreak"? "rounded-lg mx-7 px-5 py-2 scale-110 bg-[#5f1183]":"hover:scale-110 duration-300 mx-7 px-5 py-2"}
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
