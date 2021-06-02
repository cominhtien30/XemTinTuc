import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import "../styles.css";

import RouteProduct from "./routeProduct";
import Tab1 from "../component/tab/tab1";
import Tab2 from "../component/tab/tab2";
import Tab3 from "../component/tab/tab3";
import Tab4 from "../component/tab/tab4";

export default function RouterTab(props) {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to={`/screen/${props.listTags[0].key}`} />
        </Route>
        {props.listTags.map((item, index) => {
          return (
            <Route
              key={index}
              exact
              path={`/screen/${item.key}`}
              component={() => item.component}
            />
          );
        })}
        <RouteProduct
          dataProduct={props.dataProduct}
          listPages={props.listPages}
        />
      </Switch>
    </>
  );
}
