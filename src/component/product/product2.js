import React, { useState, useEffect } from "react";
import _ from "lodash";
import Carousel from "./carousel";

import CurrencyFormat from "react-currency-format";
export default function Product2(props) {
  const { dataProduct } = props.data;
  const chunk = (data, size) =>
    data.reduce(
      (acc, e, i) => (
        i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc
      ),
      []
    );
  const data = chunk(dataProduct, 4);
  const componentSale = (oPrice, price, fontSize) =>
    oPrice !== price && oPrice !== 0 && price !== 0 ? (
      <div className="sale-big-product" style={{ fontSize: fontSize }}>
        {Math.floor(100 - (price * 100) / oPrice)}%
      </div>
    ) : (
      ""
    );

  const componentPrice = (oPrice, Price, fontSize) => {
    switch (0) {
      case oPrice:
        return (
          <span
            className="price-origin price-origin-small-product"
            style={{ fontSize: fontSize }}
          >
            {" "}
            <CurrencyFormat
              suffix="đ"
              thousandSeparator={true}
              value={Price}
              displayType={"text"}
            />
          </span>
        );
      case oPrice - Price:
        return (
          <span
            className="price-origin price-origin-small-product"
            style={{ fontSize: fontSize }}
          >
            {" "}
            <CurrencyFormat
              suffix="đ"
              thousandSeparator={true}
              value={Price}
              displayType={"text"}
            />
          </span>
        );
      case Price:
        return (
          <span
            className="price-origin price-origin-small-product"
            style={{ fontSize: fontSize }}
          >
            {" "}
            <CurrencyFormat
              suffix="đ"
              thousandSeparator={true}
              value={oPrice}
              displayType={"text"}
            />
          </span>
        );
      default:
        return (
          <>
            <span
              className="price-origin price-origin-small-product"
              style={{ fontSize: fontSize }}
            >
              {" "}
              <CurrencyFormat
                suffix="đ"
                thousandSeparator={true}
                value={Price}
                displayType={"text"}
              />
            </span>
            <span className="price-sale" style={{ fontSize: fontSize - 1 }}>
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
  useEffect(() => {
    const time = setInterval(() => {
      setIndex((prev) => (prev + 1) % 3);
    }, 3000);
    return () => {
      clearInterval(time);
    };
  }, []);

  const [index, setIndex] = useState(0);
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
              <div key={index} className="item-info item-info_product1">
                <div className="border-info border-info_product2">
                  <div className="box-product">
                    <div className="box-big-product2">
                      <div className="product-item-big">
                        {componentSale(
                          _.get(item[0], "extra_info.originPrice"),
                          _.get(item[0], "extra_info.price"),
                          7.5
                        )}

                        <div
                          className="picture picture-product2-big"
                          style={{ width: "100%" }}
                        >
                          <img src={_.get(item[0], "images[0].src")} alt="" />
                        </div>
                        <div
                          className="info info-product-big"
                          style={{ width: "100%" }}
                        >
                          <div className="box-info box-info-product2-big">
                            <div className="i-info title-info title-info_product1 ">
                              {_.get(item[0], "title")}
                            </div>
                            <div className="i-info content-info content-price_product2 content-price-big-product">
                              {componentPrice(
                                _.get(item[0], "extra_info.originPrice"),
                                _.get(item[0], "extra_info.price"),
                                9
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-smaill-product2">
                      {Array(3)
                        .fill(0)
                        .map((i, index) => {
                          return (
                            <div key={index} className="product-item-smaill">
                              <div
                                className="picture "
                                style={{ width: "40%" }}
                              >
                                {componentSale(
                                  _.get(
                                    item[index + 1],
                                    "extra_info.originPrice"
                                  ),
                                  _.get(item[index + 1], "extra_info.price"),
                                  6
                                )}
                                <img
                                  src={_.get(item[index + 1], "images[0].src")}
                                  alt=""
                                />
                              </div>
                              <div className="info " style={{ width: "60%" }}>
                                <div className="box-info box-small-product">
                                  <div className="i-info title-info title-info_product1 title-info-product-smaill">
                                    {_.get(item[1], "title")}
                                  </div>
                                  <div className="i-info content-info content-price_product2">
                                    {componentPrice(
                                      _.get(
                                        item[index + 1],
                                        "extra_info.originPrice"
                                      ),
                                      _.get(
                                        item[index + 1],
                                        "extra_info.price"
                                      ),
                                      7.5
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
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
