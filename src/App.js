import React from "react";

import Menu from "./components/Menu";

import dados from "./data/dados_iniciais.json";

import BannerMain from "./components/BannerMain";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Menu />

      <BannerMain
        videoTitle={dados.categorias[0].videos[0].titulo}
        url={dados.categorias[0].videos[0].url}
        videoDescription={"O que é FrontEnd? Descubra aqui"}
      />
      {dados.categorias.map((categoria) => (
        <Carousel category={categoria} />
      ))}

      <Footer />
    </>
  );
}

export default App;
