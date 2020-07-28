import React from "react";

import Logo from "../../assets/logo.png";
import "./style.css";

import Button from "../Button";

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logo" />
      </a>

      <Button as="a" href="/">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
