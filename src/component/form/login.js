import React, { useState } from "react";
import LoadButton from "../buttonLoading/loadButton";
import "../../styles.css";
import ValidateEmail from "../../validateEmail";

export default function Login(props) {
  const [disabledSubmit, setDisableSubmit] = useState(false);
  const errorText = {
    mail: "Vui lòng kiểm tra định dạng mail",
    password: "Vui lòng kiểm tra mật khẩu lớn hơn 6 lý tự",
    null: "Không Được Bỏ Trống"
  };
  const [validate, setValidate] = useState({
    mail: true,
    password: true
  });
  const [textEmail, setTextEmail] = useState("");
  const [textPassword, setTextPassword] = useState("");
  const [loader, setLoader] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const changeInputHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const length = e.target.value.length;
    setForm({ ...form, [name]: value });
    if (name === "email") {
      if (length > 0) {
        if (!ValidateEmail(value)) {
          setValidate({ ...validate, mail: false });
          setTextEmail(errorText.mail);
        } else {
          setValidate({ ...validate, mail: true });
        }
      } else {
        setValidate({ ...validate, mail: true });
      }
    } else {
      if (length > 0) {
        if (length < 6) {
          setTextPassword(errorText.password);
          setValidate({ ...validate, password: false });
        } else {
          setValidate({ ...validate, password: true });
        }
      } else {
        setValidate({ ...validate, password: true });
      }
    }
  };
  const submitHandle = (e) => {
    e.preventDefault();
    if (form.email.length <= 0) {
      setValidate({ ...validate, mail: false });
      //setValidateGmail(false);
      setTextEmail(errorText.null + " Mail");
    } else if (form.password.length <= 0) {
      setValidate({ ...validate, password: false });
      //setValidatePassword(false);
      setTextPassword(errorText.null + " Paswword");
    }
    if (
      form.password.length > 0 &&
      form.email.length > 0 &&
      validate.mail &&
      validate.password
    ) {
      setLoader(true);
      setDisableSubmit(true);
      const timer = setTimeout(() => {
        setLoader(false);
        setDisableSubmit(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  };
  return (
    <>
      <form onSubmit={submitHandle}>
        <div
          className={"form-login "}
          style={
            props.form === 1
              ? { transform: "translateY(-550px)", transition: "0.5s" }
              : { transform: "translateY(0px)", transition: "0.5s" }
          }
        >
          <div className="row">
            <div className="title-login">Đăng Nhập</div>
          </div>
          <div className="row ">
            <div className="row-input">
              <div
                className="icon-mail"
                style={{
                  backgroundColor: !validate.mail ? "rgb(255, 235, 235)" : ""
                }}
              >
                <i
                  className="far fa-envelope"
                  style={{ color: !validate.mail ? "rgb(235, 87, 87)" : "" }}
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
          <div className="row" style={{ display: validate.mail ? "none" : "" }}>
            <div className="validate">{textEmail}</div>
          </div>
          <div className="row">
            <div className="row-input">
              <div
                className="icon-mail"
                style={{
                  backgroundColor: !validate.password
                    ? "rgb(255, 235, 235)"
                    : ""
                }}
              >
                <i
                  className="fas fa-lock"
                  style={{
                    color: !validate.password ? "rgb(235, 87, 87)" : ""
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
            style={{ display: validate.password ? "none" : "" }}
          >
            <div className="validate">{textPassword}</div>
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
              Đăng Nhập
              {loader ? <LoadButton /> : ""}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
