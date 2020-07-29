import React from "react";

import Menu from "../../components/Menu";

import dados from "../../data/dados_iniciais.json";

import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Menu />

      <BannerMain
        videoTitle={dados.categorias[0].videos[0].titulo}
        url={dados.categorias[0].videos[0].url}
        videoDescription={
          "Você já criou interfaces responsivas? Bora aprimorar as habilidades?"
        }
      />
      {dados.categorias.map((categoria) => (
        <Carousel category={categoria} />
      ))}

      <Footer />
    </>
  );
}

export default Home;
