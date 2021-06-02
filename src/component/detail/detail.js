import React, { useState, useContext } from "react";
import moment from "moment";
import parse from "html-react-parser";
import "../../styles.css";
import _ from "lodash";
import { UserContext } from "../home";
import { useHistory } from "react-router-dom";

export default function Detail(props) {
  const history = useHistory();
  const { data } = useContext(UserContext);
  const { id } = props.match.params;
  const detail = data.filter((item, index) => item._id === id)[0];
  const Undefined = (a, b) => {
    return _.get(a, b, "Undefined");
  };
  const content = Undefined(detail, "extra_info.content");
  const [showDialogFont, setShowDialogFont] = useState(false);
  const [showDialogShare, setShowDialogShare] = useState(false);
  const [fontSize, setFontSize] = useState(12);
  const [background, setBackground] = useState(true);
  const showDialogHandle = (i) => {
    i === 1 ? setShowDialogFont(true) : setShowDialogShare(true);
  };
  const hideDialogHanlde = () => {
    if (showDialogShare || showDialogFont) {
      setShowDialogShare(false);
      setShowDialogFont(false);
    }
  };
  const changeFontSizeHanlde = (size) => {
    setFontSize(size);
  };
  const changeBackgroundHanlde = (bg) => {
    setBackground(bg);
  };
  return (
    <>
      <div className="detail">
        <div
          className={"selection-font " + (showDialogFont ? "show_font" : "")}
        >
          <div className="row title-font">GIAO DIỆN ĐỌC</div>
          <div className="row title-size">
            <div className="title-name-size">Cở Chử :</div>
            <div className="list-name-size">
              <div
                style={{ cursor: "pointer" }}
                onClick={() => changeFontSizeHanlde(10.5)}
                className={
                  "item-name-size" + (fontSize === 10.5 ? " active-font" : "")
                }
              >
                Nhỏ
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => changeFontSizeHanlde(12)}
                className={
                  "item-name-size" + (fontSize === 12 ? " active-font" : "")
                }
              >
                Vừa
              </div>
              <div
                style={{ cursor: "pointer" }}
                onClick={() => changeFontSizeHanlde(13.8)}
                className={
                  "item-name-size" + (fontSize === 13.8 ? " active-font" : "")
                }
              >
                Lớn
              </div>
            </div>
          </div>
          <div className="row title-display">
            <div className="title-name-display">Giao Diện :</div>
            <div className="list-name-display">
              <div
                onClick={() => changeBackgroundHanlde(false)}
                className={
                  "item-name-display " + (!background ? "active-font" : "")
                }
              >
                Tối
              </div>
              <div
                onClick={() => changeBackgroundHanlde(true)}
                className={
                  "item-name-display " + (background ? "active-font" : "")
                }
              >
                Sáng
              </div>
            </div>
          </div>
        </div>
        <div
          className={"select-share " + (showDialogShare ? "show_share" : "")}
        >
          <div className="row title-share">Chia Sẽ Bài Viết</div>
          <div className="row list-icon-share">
            <div className="icon-share">
              <i
                className="fab fa-facebook-f"
                style={{ backgroundColor: "blue", color: "white" }}
              />
            </div>
            <div className="icon-share">
              <i
                className="fab fa-twitter"
                style={{ color: "white", backgroundColor: "rgb(13,171, 245)" }}
              />
            </div>
            <div className="icon-share">
              <i
                className="fab fa-linkedin-in"
                style={{ backgroundColor: "rgb(32, 32,167)", color: "white" }}
              />
            </div>
            <div className="icon-share">
              <i
                className="fab fa-telegram-plane"
                style={{ color: "white", backgroundColor: "rgb(13,171, 245)" }}
              />
            </div>
            <div className="icon-share">
              <i
                className="fas fa-envelope"
                style={{ backgroundColor: "rgb(223, 0, 226)", color: "white" }}
              />
            </div>
          </div>
        </div>
        <div
          onClick={hideDialogHanlde}
          className="row"
          style={{
            position: "absolute",
            top: 0,
            zIndex: 99,
            opacity: showDialogFont || showDialogShare ? "0.2" : ""
          }}
        >
          <div
            className="header-detail"
            style={{
              backgroundColor: background ? "white" : "black",
              color: background ? "black" : "white"
            }}
          >
            <div className="icon-detail">
              {/* <Link
                to={{ pathname: `/`, state: 1 }}
                style={{ color: background ? "black" : "white" }}
              >
                <i className="i-detail fas fa-arrow-left" />
              </Link> */}
              <i
                className="i-detail fas fa-arrow-left"
                onClick={() => history.goBack()}
              />
            </div>
            <div className="icon-detail">
              <i
                onClick={(e) => showDialogHandle(1, e)}
                className="i-detail fas fa-text-height"
              />
              <i
                onClick={(e) => showDialogHandle(2, e)}
                className="i-detail fas fa-share-alt"
              />
            </div>
          </div>
        </div>
        <div
          onClick={hideDialogHanlde}
          className="main-detail"
          style={{
            opacity: showDialogFont || showDialogShare ? "0.2" : ""
          }}
        >
          <div className="row">
            <div className="img-cover">
              <img src={Undefined(detail, "images[0].src")} alt="" />
            </div>
          </div>
          <div
            className="row content-detail"
            style={{
              backgroundColor: background ? "white" : "black",
              color: background ? "black" : "white"
            }}
          >
            <div className="box-detail">
              <div
                className="row title-detail"
                style={{ fontSize: fontSize + 5 }}
              >
                {Undefined(detail, "title")}
              </div>
              <div
                className="row date-detail"
                style={{
                  borderBottomColor: background ? "black" : "white",
                  borderTopColor: background ? "black" : "white"
                }}
              >
                <span className="home">
                  {Undefined(detail, "source_id.source.categories[19].title")}
                </span>
                <span className="date">
                  {moment(Undefined(detail, "createdAt")).format(
                    "DD [Thg]  MM YYYY H:mm"
                  )}
                </span>
              </div>
              <div
                className="row description-detail"
                style={{ fontSize: fontSize }}
              >
                {parse(content)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
