import React from "react";

import Logo from "../../assets/logo.png";
import "./style.css";

import ButtonLink from "../ButtonLink/index";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </a>

      <ButtonLink href="/" className="ButtonLink">
        Novo vídeo
      </ButtonLink>
    </nav>
  );
}

export default Menu;
