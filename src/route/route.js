import React from "react";
import Tab from "../component/tab";
import Detail from "../component/detail/detail";
import Note from "../component/notification/notification";
import Form from "../component/form/form";
import { Switch, Route } from "react-router-dom";
export default function listRoute() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Tab} />
        <Route path="/screen" component={Tab} />
        <Route path="/news/:id" exact component={Detail} />
        <Route path="/notification" exact component={Note} />
        <Route path="/login" exact component={Form} />
      </Switch>
    </>
  );
}
