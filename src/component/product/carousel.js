import React from "react";
import "./product1.css";
// import data from "../data";
export default function Product1(props) {
  return (
    <>
      <div className="list-next">
        {Array(3)
          .fill(0)
          .map((item, index) => {
            return (
              <div
                className="item-next"
                style={{ backgroundColor: props.index === index && "#9e9898" }}
              />
            );
          })}
      </div>
    </>
  );
}
