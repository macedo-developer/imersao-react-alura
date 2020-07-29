import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Home from "./pages/Home";
import CadastroVideo from "./pages/CadastroVideo";
import CadastroCategoria from "./pages/CadastroCategoria";

import { BrowserRouter, Switch, Route } from "react-router-dom";

function Page404() {
  return <h1>404 not found </h1>;
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
