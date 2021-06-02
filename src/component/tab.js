import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";
import Overlay from "./overLay";
import ListPages from "./listPages/listPages";
import IconChooseProduct from "./chooseProductPage/iconChooseProduct";
import { UserContext } from "./home";
import RouterTab from "../route/routerTab";
import Placeholder from "./Placeholder";

export default function Tab(props) {
  const { data, dataProduct } = useContext(UserContext);
  const [inputSearch, setInputSearch] = useState(false);
  const listPages = ListPages(inputSearch, data, dataProduct);
  const keyPatch = props.location.pathname.split("/")[2];
  const index = listPages.findIndex((item) => item.key === keyPatch);
  const listTabs = listPages.filter((item) => item.type === 1);
  const listPageProducts = listPages.filter((item) => item.type === 2);
  const [moveTab, setMoveTab] = useState(0);
  const { intro } = useContext(UserContext);

  const nameTitle = () => {
    if (index >= 0) {
      return listPages[index].name;
    } else {
      return 0;
    }
  };
  const [showTab, setShowTag] = useState(0);

  useEffect(() => {
    if (index >= 0) {
      setShowTag(index);
      setMoveTab(index * 100);
    } else {
      setShowTag(0);
    }
  }, [index]);

  const [showNav, setShowNav] = useState(false);
  const [showChooseProduct, setShowChooseProduct] = useState(false);

  const showChooseProductHandle = (isSet) => {
    setMoveTab(-1);
    setShowChooseProduct(isSet === false ? isSet : !showChooseProduct);
  };
  const hideTagHandle = () => {
    setShowTag(-1);
  };

  function showInputSearchHandle() {
    setInputSearch(!inputSearch);
  }
  const chooseNavTab = (i) => {
    setShowTag(i);
  };
  const showNavHandle = () => {
    setShowNav(true);
  };
  const hideNavHandle = (isTurn) => {
    if (showNav) {
      setShowNav(isTurn);
    }
  };
  const showTabHandle = (i) => {
    setMoveTab(100 * i);
    setShowTag(i);
  };
  const [loadPage, setLoadPage] = useState(false);
  useEffect(() => {
    setLoadPage(true);
    setTimeout(() => {
      setLoadPage(false);
    }, 3000);
  }, [showTab]);
  return (
    <>
      {showNav || showChooseProduct ? (
        <Overlay
          hideNavHandle={hideNavHandle}
          showChooseProductHandle={showChooseProductHandle}
        />
      ) : (
        ""
      )}
      <div className="tag-content">
        <div>
          <Nav
            showNav={showNav}
            listTag={listPages.filter((item) => item.type === 1)}
            chooseNavTab={chooseNavTab}
            TagChoose={showTab}
          />
        </div>
        <div
          className="row"
          style={
            showNav
              ? { transform: "translateX(170px)", transition: "0.4s" }
              : { transform: "translateX(0)", transition: "0.4s" }
          }
        >
          <div className="list list-item">
            <div className="col">
              <div className="item">
                <i onClick={showNavHandle} className="fas fa-bars" />
              </div>
              <div className="item">
                <span className="title-tag">{nameTitle()}</span>
              </div>
            </div>
            <div className="col">
              <div className="item">
                <Link to="/login" style={{ color: "white" }}>
                  {" "}
                  <i className="far fa-comment-dots" />
                </Link>
              </div>
              <div className="item">
                <Link to="/notification" style={{ color: "white" }}>
                  <i className="far fa-bell" />
                </Link>
              </div>
              <div className="item">
                <i className="far fa-user" />
              </div>
              <div className="item">
                <i className="fas fa-search" onClick={showInputSearchHandle} />
              </div>
            </div>
            <div
              className="input-search"
              style={!inputSearch ? { display: "none" } : {}}
            >
              <input type="text" placeholder="Search..." />
              <i className="fas fa-search" />
            </div>
          </div>
        </div>
        {!showNav && intro
          ? ""
          : !showNav &&
            !intro && (
              <IconChooseProduct
                listPages={listPageProducts}
                showChooseProduct={showChooseProduct}
                showChooseProductHandle={showChooseProductHandle}
                hideTagHandle={hideTagHandle}
              />
            )}
        {loadPage ? (
          <Placeholder />
        ) : (
          <RouterTab listPages={listPageProducts} listTags={listTabs} />
        )}

        <div
          className="row"
          style={{
            position: "absolute",
            bottom: "0px",
            transform: showNav ? "translateX(170px)" : "translateX(0px)",
            transition: showNav ? "0.4s" : "0.4s"
          }}
        >
          <div className="list list-tag">
            {listTabs.map((item, index) => {
              return (
                <Link
                  key={index}
                  to={`/screen/${item.key}`}
                  style={{
                    textDecoration: "none",
                    display: "flex",
                    width: 100 / listTabs.length + "%"
                  }}
                >
                  <div
                    onClick={() => showTabHandle(index)}
                    className={
                      "col tab " + (index === showTab ? " active" : "")
                    }
                    style={{
                      cursor: "pointer",

                      width: "100%"
                    }}
                  >
                    <i className={"fas fa-table"} />
                    <span>{index === showTab && item.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div
            style={{
              transition: "0.5s",
              transform: `translateX(${moveTab}%)`,
              width: 100 / listTabs.length + "%",
              position: "absolute",
              height: "100%",
              opacity: "0.3",
              display: moveTab === -1 ? "none" : "",
              cursor: "pointer",
              borderRadius: "5px",
              background: "rgb(77, 147, 255)",
              bottom: "-1px"
            }}
          ></div>
        </div>
        {/* )} */}
      </div>
    </>
  );
}
