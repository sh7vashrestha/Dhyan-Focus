import React, { useRef } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import optionStore from "../store/option";

function MainBody() {
  const store = optionStore();
  const secondsLeftRef = useRef(store.secondsLeft);
  const isPausedRef = useRef(store.isPaused);
  const modeRef = useRef(store.mode);
  const totalSeconds = store.timer * 60;
  const percentage = Math.round(100);
  return (
    <div className="w-full mx-auto text-[#fefefe]">
      <div className="max-w-[1000px] m-auto w-full">
        <div className="w-auto max-w-[400px] mx-auto mt-2">
          <CircularProgressbar
            value={40}
            strokeWidth={12}
            text="50"
            styles={buildStyles({
              // Rotation of path and trail, in number of turns (0-1)
              rotation: 1,

              // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
              strokeLinecap: "butt",

              // Text size
              textSize: "20px",

              // How long animation takes to go from one percentage to another, in seconds
              pathTransitionDuration: 1,

              // Can specify path transition in more detail, or remove it entirely
              // pathTransition: 'none',

              // Colors
              pathColor: store.mode === "focus"? "#5f11c7":"#1b6e1b",
              textColor: "#fefefe",
              trailColor: 'rgba(255,255,255,.5)',
            })}
          />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
