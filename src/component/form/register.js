import React, { useState } from "react";
import LoadButton from "../buttonLoading/loadButton";
import "../../styles.css";
import ValidateEmail from "../../validateEmail";

export default function Register(props) {
  const [errors, setErrors] = useState({});
  const [textPassword, setTextPassword] = useState("");
  const [disabledSubmit, setDisableSubmit] = useState(false);
  const [loader, setLoader] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: ""
  });
  const handleErrors = (name = "", targetValue = null) => {
    let error = {};
    const value = targetValue !== null ? targetValue : form[name];

    if (!value) {
      error = { ...errors, [name]: "Không Được Bỏ Trống" };
    } else if (value) {
      if (name === "email") {
        if (!ValidateEmail(value)) {
          error = { ...errors, [name]: "Vui lòng kiểm tra định dạng " };
        } else {
          delete error[name];
        }
      }
      if (name === "password") {
        setTextPassword(value);
        if (value.length < 6) {
          error = {
            ...errors,
            [name]: "Vui lòng kiểm tra mật khẩu lớn hơn 6 ký tự"
          };
        } else {
          delete error[name];
        }
      }
      if (name === "rePassword") {
        if (textPassword !== value) {
          error = {
            ...errors,
            [name]: "Mật khẩu không trùng khớp"
          };
        } else {
          delete error[name];
        }
      }
    }
    return error;
  };
  const changeInputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    //const length = e.target.value.length;
    setErrors(handleErrors(name, value));
    setForm({ ...form, [name]: value });
  };
  const submitHandle = (e) => {
    e.preventDefault();
    const arr = ["name", "password", "email", "rePassword"];
    let error = {};
    for (let i = 0; i < arr.length; i++) {
      error = { ...error, ...handleErrors(arr[i]) };
    }
    if (Object.keys(error).length <= 0) {
      setLoader(true);
      setDisableSubmit(true);
      const timer = setTimeout(() => {
        setLoader(false);
        setDisableSubmit(false);
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      setErrors(error);
      return;
    }
  };
  return (
    <>
      <form onSubmit={submitHandle}>
        <div
          className={"form-register "}
          style={
            ({ bottom: "-50%" },
            props.form === 2
              ? { transform: "translateY(-550px)", transition: "0.5s" }
              : { transform: "translateY(0px)", transition: "0.5s" })
          }
        >
          <div className="row">
            <div className="title-login">Đăng Ký</div>
          </div>
          <div className="row ">
            <div className="row-input">
              <div
                className="icon-mail"
                style={{
                  backgroundColor: errors?.name ? "rgb(255, 235, 235)" : ""
                }}
              >
                <i
                  className="fas fa-address-book"
                  style={{ color: errors?.name ? "rgb(235, 87, 87)" : "" }}
                />
              </div>
              <div className="input-mail">
                <input
                  type="text"
                  onChange={changeInputHandle}
                  name="name"
                  placeholder="Họ Tên"
                />
              </div>
            </div>
          </div>
          <div className="row" style={{ display: !errors?.name ? "none" : "" }}>
            <div className="validate">{errors?.name ? errors.name : ""}</div>
          </div>
          <div className="row ">
            <div className="row-input">
              <div
                className="icon-mail"
                style={{
                  backgroundColor: errors?.mail ? "rgb(255, 235, 235)" : ""
                }}
              >
                <i
                  className="far fa-envelope"
                  style={{ color: errors?.email ? "rgb(235, 87, 87)" : "" }}
                />
              </div>
              <div className="input-mail">
                <input
                  onChange={changeInputHandle}
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ display: !errors?.email ? "none" : "" }}
          >
            <div className="validate">{errors?.email ? errors.email : ""}</div>
          </div>
          <div className="row">
            <div className="row-input">
              <div
                className="icon-mail"
                style={{
                  backgroundColor: errors?.password ? "rgb(255, 235, 235)" : ""
                }}
              >
                <i
                  className="fas fa-lock"
                  style={{
                    color: errors?.password ? "rgb(235, 87, 87)" : ""
                  }}
                />
              </div>
              <div className="input-mail">
                <input
                  onChange={changeInputHandle}
                  type="password"
                  name="password"
                  placeholder="Mật Khẩu"
                />
              </div>
            </div>
          </div>
          <div
            className="row "
            style={{ display: !errors?.password ? "none" : "" }}
          >
            <div className="validate">
              {errors?.password ? errors.password : ""}
            </div>
          </div>
          <div className="row">
            <div className="row-input">
              <div
                className="icon-mail"
                style={{
                  backgroundColor: errors?.rePassword
                    ? "rgb(255, 235, 235)"
                    : ""
                }}
              >
                <i
                  className="fas fa-lock"
                  style={{
                    color: errors?.rePassword ? "rgb(235, 87, 87)" : ""
                  }}
                />
              </div>
              <div className="input-mail">
                <input
                  onChange={changeInputHandle}
                  type="password"
                  name="rePassword"
                  placeholder="Nhập Lại Mật Khẩu"
                />
              </div>
            </div>
          </div>
          <div
            className="row "
            style={{ display: !errors?.rePassword ? "none" : "" }}
          >
            <div className="validate">
              {errors?.rePassword ? errors.rePassword : ""}
            </div>
          </div>
          <div className="row">
            <button
              className="btn-submit"
              type="submit"
              disabled={disabledSubmit}
              style={{
                cursor: "pointer",
                display: loader ? "flex" : "",
                justifyContent: loader ? "center" : ""
              }}
            >
              Đăng Ký
              {loader ? <LoadButton /> : ""}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
