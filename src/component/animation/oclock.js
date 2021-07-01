import React, { useState } from "react";
import "../../styles.css";
import "./oclock.css";
export default function Oclock(props) {
  let timeNow = new Date().toLocaleTimeString();
  const arrayTime = timeNow.split(":");
  const [h, setH] = useState(arrayTime[0]);
  const [m, setM] = useState(arrayTime[1]);
  const [s, setS] = useState(arrayTime[2]);
  const updateTime = () => {
    timeNow = new Date().toLocaleTimeString();
    const arrayTime = timeNow.split(":");
    setH(arrayTime[0]);
    setM(arrayTime[1]);
    setS(arrayTime[2]);
  };

  setInterval(() => {
    updateTime();
  }, 1000);
  return (
    <>
      <figure className="oclock">
        <div className="face top">
          <p id="s">{s.slice(0, -2)}</p>
        </div>
        <div className="face front">
          <p id="m">{m}</p>
        </div>
        <div className="face left">
          <p id="h">{h}</p>
        </div>
      </figure>
    </>
  );
}
