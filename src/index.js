import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import App from "./App";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function Page404() {
  return <h1>404 not found </h1>;
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
