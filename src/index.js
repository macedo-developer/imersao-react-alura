import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Home from "./pages/Home";
import CadastroVideo from "./pages/CadastroVideo";
import CadastroCategoria from "./pages/CadastroCategoria";
import NotFound from "./pages/NotFound";

import { BrowserRouter, Switch, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/cadastro/categoria" component={CadastroCategoria} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
