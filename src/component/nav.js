import React from "react";
import { Route, Link } from "react-router-dom";

export default function Nav(props) {
  const chooseTag = (i) => {
    props.chooseNavTab(i);
  };
  return (
    <div className={"tabnav " + (props.showNav ? "show-nav" : "hide-nav")}>
      <div className="nav-header" />
      <div className="nav">
        {props.listTag.map((item, index) => {
          return (
            <Link
              key={index}
              to={`/screen/${props.listTag[index].key}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <div
                className="item-nav"
                style={{
                  backgroundColor: props.TagChoose === index ? "white" : ""
                }}
                onClick={() => chooseTag(index)}
              >
                <i
                  style={{
                    color: props.TagChoose === index ? "black" : ""
                  }}
                  className={"i-nav fas fa-table"}
                />
                <div className="i-nav name-tag">{item.name}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
