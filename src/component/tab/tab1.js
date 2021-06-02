import React from "react";
import _ from "lodash";
import { Route, Link } from "react-router-dom";

import "../../styles.css";
// import data from "../data";
export default function Tab1(props) {
  const { data } = props;

  return (
    <>
      <div
        className="row"
        id="tab1"
        style={
          props.showNav
            ? { transform: "translateX(170px)", transition: "0.4s" }
            : { transform: "translateX(0)", transition: "0.4s" }
        }
      >
        <div
          className="list-info"
          style={props.inputSearch ? { maxHeight: "418px" } : {}}
        >
          {data.map((item, index) => {
            return (
              <>
                <Link
                  key={index}
                  to={{
                    pathname: `/news/${item._id}`,
                    state: item
                  }}
                  style={{
                    textDecoration: "none"
                  }}
                >
                  <div key={index} className="item-info">
                    <div
                      className="border-info"
                      style={index % 2 ? { flexDirection: "row-reverse" } : {}}
                    >
                      <div className="picture">
                        <img src={_.get(item, "images[0].src")} alt="" />
                      </div>
                      <div className="info">
                        <div className="box-info">
                          <div className="i-info name-info">
                            {" "}
                            {_.get(
                              item,
                              "source_id.source.categories[19].title"
                            )}
                          </div>
                          <div className="i-info title-info">{item.title}</div>
                          <div
                            className="i-info content-info"
                            style={{ color: "rgb(189, 189, 189)" }}
                          >
                            {_.get(item, "description")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
