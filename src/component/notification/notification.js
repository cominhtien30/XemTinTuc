import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

export default function Note(props) {
  return (
    <div
      class="content-note"
      style={{ borderRadius: "10px", overflow: "hidden" }}
    >
      <div class="row" style={{ borderRadius: "10px 10px 0 0 " }}>
        <div class="header-note">
          <Link to="/" style={{ color: "black" }}>
            <i class="i-note fas fa-arrow-left"></i>
          </Link>
          <div class="i-note name-note">THÔNG BÁO</div>
        </div>
      </div>
    </div>
  );
}
