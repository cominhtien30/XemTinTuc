import React, { useState } from "react";

import "../../styles.css";
import Login from "./login";
import Register from "./register";
import { BrowserRouter as Route, Link } from "react-router-dom";

export default function Form(props) {
  const [form, setForm] = useState(null);
  const [area, setArea] = useState(false);
  const openFormHandle = (a) => {
    a ? setForm(1) : setForm(2);
  };
  const hideFormHandle = () => {
    if (!!form && !area) {
      setForm(null);
    }
  };
  //+ (form ? "hide-form" : "")
  return (
    <div className="content-login" onClick={hideFormHandle}>
      <div className={"opacity-form " + (form ? "hide-form" : "")}>
        <div className="list-button ">
          <button
            style={{ cursor: "pointer" }}
            className="btn-login"
            onClick={() => openFormHandle(true)}
          >
            Đăng Nhập
          </button>
          <button
            style={{ cursor: "pointer" }}
            className="btn-register"
            onClick={() => openFormHandle(false)}
          >
            Đăng Ký
          </button>
        </div>
        <div class=" prev">
          <Link to="/">
            {" "}
            <i class="fas fa-arrow-circle-left"></i>{" "}
          </Link>
        </div>
        <div
          onMouseEnter={() => setArea(true)}
          onMouseLeave={() => setArea(false)}
          onClick={() => {
            hideFormHandle();
          }}
        >
          <Login form={form} />
          <Register form={form} />
        </div>
      </div>
    </div>
  );
}
