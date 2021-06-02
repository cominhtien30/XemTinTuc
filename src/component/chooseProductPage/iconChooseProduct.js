import React from "react";
import "./iconAdd.css";
import { Route, Link, useHistory } from "react-router-dom";

export default function IconCHooseProduct(props) {
  const { listPageProducts } = props;

  const history = useHistory();
  const showChooseProductHandle = () => {
    props.showChooseProductHandle();
  };
  const viewProduct = (item) => {
    props.showChooseProductHandle();
    props.hideTagHandle();
    history.push({
      pathname: `/screen/${item}`
    });
  };

  return (
    <div>
      <div className="icon-add" onClick={showChooseProductHandle}>
        <i className="fas fa-plus" />
      </div>
      {listPageProducts.map((item, index) => {
        return (
          <div
            key={index}
            className={`row-icon-product row-icon-product${index + 1}`}
            style={
              props.showChooseProduct
                ? (index + 1) % 2 === 0
                  ? { transform: "translateY(-45px)" }
                  : { transform: "translateY(-85px)" }
                : { transform: "translateY(0px)" }
            }
            onClick={() => viewProduct(item.key)}
          >
            <div
              className="name-product-icon"
              style={!props.showChooseProduct ? { display: "none" } : {}}
            >
              Product {index + 1}
            </div>
            <div
              className={`icon-add icon-product${index + 1}`}
              style={
                (index + 1) % 2 === 0
                  ? { backgroundColor: "crimson" }
                  : { backgroundColor: "purple" }
              }
            >
              <i className="fab fa-product-hunt" />
            </div>
          </div>
        );
      })}

      {/* <div
        className="row-icon-product row-icon-product2"
        style={
          props.showChooseProduct
            ? { transform: "translateY(-45px)" }
            : { transform: "translateY(0px)" }
        }
      >
        <div
          className="name-product-icon"
          style={!props.showChooseProduct ? { display: "none" } : {}}
        >
          Product 2
        </div>
        <div className=" icon-add icon-product2">
          <i className="fab fa-product-hunt" />
        </div>
      </div> */}
    </div>
  );
}
