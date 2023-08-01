import React, { useEffect, useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { BsFillPlayFill, BsStopCircleFill } from "react-icons/bs";
import { BiPauseCircle } from "react-icons/bi";
import optionStore from "../store/option";
import useSound from "use-sound";
import pauseSfx from "../sounds/pauseTimer.mp3";
import startSfx from "../sounds/startTimer.mp3";
import timesUpSfx from "../sounds/timesUp.mp3";

function MainBody() {
  const store = optionStore();
  const [playbackRate, setPlaybackRate] = useState(2)
  const [start] = useSound(startSfx, {volume: store.volume});
  const [pause] = useSound(pauseSfx, {volume: store.volume});
  const [timesUp] = useSound(timesUpSfx,{playbackRate, volume: store.volume});
  const startTime = () => {
    start();
    store.paused();
  };
  const pauseTime = () => {
    pause();
    store.paused();
  };
  const reset = () => {
    pause();
    store.reset();
  };
  useEffect(() => {
    const interval = setInterval(() => {
      if (store.secondsLeft === 0) {
        timesUp();
        return store.switchMode();
      }
      if (store.isPaused) return;
      store.tick();
    }, 1000);
    return () => clearInterval(interval);
  }, [store.secondsLeft, store.isPaused]);

  const totalSeconds = store.timer * 60;
  const percentage = Math.round((store.secondsLeft / totalSeconds) * 100);
  const minutes = Math.floor(store.secondsLeft / 60);
  let seconds = store.secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;
  return (
    <div className="w-full mx-auto text-[#fefefe]">
      <div className="max-w-[1000px] m-auto w-full">
        <div className="w-auto max-w-[270px] sm:max-w-[330px] mx-auto mt-2">
          <CircularProgressbarWithChildren
            value={percentage}
            strokeWidth={4}
            styles={buildStyles({
              rotation: 1,
              strokeLinecap: "butt",
              pathTransitionDuration: 0.75,
              pathColor: store.mode === "focus" ? "#5f11c7" : "#3b9e2c",
              trailColor: "rgba(255,255,255,.5)",
            })}>
            <div
              className={
                store.isPaused === true
                  ? "text-5xl pt-3 sm:text-7xl text-[rgba(255,255,255,.3)]"
                  : "text-5xl pt-3 sm:text-7xl text-[#fefefe]"
              }>
              <button
                onClick={store.isPaused === true ? startTime : pauseTime}
                className="w-full align-middle justify-center group">
                {minutes + ":" + seconds}
                <div
                  className={
                    store.isPaused === true &&
                    store.timer === store.secondsLeft / 60
                      ? "text-xl sm:text-2xl flex w-full align-middle justify-center group-hover:scale-110 duration-500 mt-4"
                      : "hidden"
                  }>
                  Start
                  <BsFillPlayFill className="ml-2 mt-1" />
                </div>
                <div
                  className={
                    store.isPaused === true &&
                    store.timer !== store.secondsLeft / 60
                      ? "text-xl sm:text-2xl flex w-full align-middle justify-center group-hover:scale-110 duration-500 mt-4"
                      : "hidden"
                  }>
                  Resume
                  <BsFillPlayFill className="ml-2 mt-1" />
                </div>
                <div
                  className={
                    store.isPaused === true
                      ? "hidden"
                      : "text-xl sm:text-2xl flex w-full align-middle justify-center group-hover:scale-110 duration-500 mt-4"
                  }>
                  Pause
                  <BiPauseCircle className="ml-2 mt-1 scale-110" />
                </div>
              </button>
            </div>
          </CircularProgressbarWithChildren>
          <button
            onClick={reset}
            className={
              store.timer !== store.secondsLeft / 60
                ? "flex justify-center align-middle w-full text-2xl sm:text-3xl text-[#aaa] mt-4 hover:scale-110 duration-500"
                : "hidden"
            }>
            Stop
            <BsStopCircleFill className="mt-1 ml-3" />{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainBody;
