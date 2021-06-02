import React, { useState, useEffect } from "react";
import _ from "lodash";
import "./product1.css";
import Carousel from "./carousel";
import CurrencyFormat from "react-currency-format";
// import data from "../data";
export default function Product1(props) {
  const data = props.data.dataProduct;

  const componentPrice = (oPrice, Price) => {
    switch (0) {
      case oPrice:
        return (
          <span className="price-origin">
            {/* {Price} */}
            <CurrencyFormat
              value={Price}
              displayType={"text"}
              suffix="đ"
              thousandSeparator={true}
            />
          </span>
        );
      case oPrice - Price:
        return (
          <span className="price-origin">
            {/* {Price} */}
            <CurrencyFormat
              value={Price}
              displayType={"text"}
              suffix="đ"
              thousandSeparator={true}
            />
          </span>
        );
      case Price:
        return (
          <span className="price-origin">
            {" "}
            <CurrencyFormat
              value={oPrice}
              displayType={"text"}
              suffix="đ"
              thousandSeparator={true}
            />{" "}
          </span>
        );
      default:
        return (
          <>
            <span className="price-origin">
              {" "}
              <CurrencyFormat
                value={Price}
                suffix="đ"
                thousandSeparator={true}
                displayType={"text"}
              />{" "}
            </span>
            <span className="price-sale">
              {" "}
              <CurrencyFormat
                suffix="đ"
                thousandSeparator={true}
                value={oPrice}
                displayType={"text"}
              />
            </span>
          </>
        );
    }
  };
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const time = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => {
      clearInterval(time);
    };
  }, []);

  return (
    <>
      <div className="row" id="product1">
        <div
          className="list-info list-info_product1"
          style={props.inputSearch ? { maxHeight: "430px" } : {}}
        >
          <Carousel index={index} />
          <div
            className="item-info main-info_product1"
            style={{
              transform: `translateX(${-index * 100}%)`,
              transition: index !== 0 ? "3s" : "unset"
            }}
          >
            <div className="picture-main">
              <img
                src="https://dashboard.nevable.net/img/widgets/SlideShow/3.jpg"
                alt=""
              />
              <img
                src="https://dashboard.nevable.net/img/widgets/SlideShow/2.jpg"
                alt=""
              />
              <img
                src="https://dashboard.nevable.net/img/widgets/SlideShow/1.jpg"
                alt=""
              />
            </div>
          </div>
          {data.map((item, index) => {
            return (
              <div className="item-info item-info_product1">
                <div className="border-info border-info_product1">
                  <div className="picture" style={{ width: "40%" }}>
                    <img src={_.get(item, "images[0].src")} alt="" />
                  </div>
                  <div className="info" style={{ width: "60%" }}>
                    <div className="box-info">
                      <div className="i-info title-info title-info_product1">
                        {_.get(item, "title")}
                      </div>
                      <div className="i-info content-info content-price_product1">
                        {componentPrice(
                          _.get(item, "extra_info.originPrice"),
                          _.get(item, "extra_info.price")
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
