import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function MainBody() {
  return (
    <div className="w-full mx-auto">
      <div className="max-w-[1000px] w-full">
        <div>
          <ul>
            <li></li>
          </ul>
        </div>
        <div style={{ margin: "auto", width: 500, height: 500 }}>
          <CircularProgressbar value={66} text="66" />
        </div>
      </div>
    </div>
  );
}

export default MainBody;
