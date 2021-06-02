import React, { useState, useEffect } from "react";
import imgNews from "../../img/news.png";

let check = false;
export default function Hone(props) {
  return (
    <div className="intro">
      <img src={imgNews} alt="" id="intro_imgLogo" />
    </div>
  );
}
