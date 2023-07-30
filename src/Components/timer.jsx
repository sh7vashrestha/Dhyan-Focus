import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function MainBody() {
  return (
    <div className="w-full mx-auto text-[#fefefe]">
      <div className="max-w-[1000px] m-auto w-full">

        <div
          style={{
            margin: "auto",
            maxWidth: 400,
            width: "auto",
            height: "auto", 
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.25,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",

            // Text size
            textSize: "16px",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(62, 152, 199, ${50 / 100})`,
            textColor: "#f88",
            trailColor: "#d6d6d6"
          }}>
          <CircularProgressbar value={50} text="50" />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
