import React from "react";
import { Link } from "react-router-dom";

import PageDefault from "../../components/PageDefault";

import { Main, Information, Animation } from "./style";

function NotFound() {
  return (
    <>
      <PageDefault>
        <Main>
          <Information>
            <h1>404</h1>
            <span>Página Não Encontrada :(</span>

            <Link to="/">Voltar para o ínicio</Link>
          </Information>
          <Animation></Animation>
        </Main>
      </PageDefault>
    </>
  );
}

export default NotFound;
