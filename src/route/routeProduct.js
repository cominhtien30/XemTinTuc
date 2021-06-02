import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../styles.css";
import Product1 from "../component/product/product1";
export default function RouterProduct(props) {
  return (
    <>
      {props.listPages.map((item, index) => {
        return (
          <Route
            key={index}
            path={`/screen/${item.key}`}
            component={() => item.component}
          />
        );
      })}
      {/* <Route
        path={`/screen/:pageproduct`}
        component={() => (
          <Product1
            data={props.dataProduct}
            listPages={props.listPages}
            inputSearch={props.inputSearch}
          />
        )}
      /> */}
    </>
  );
}
