import React, { useState } from "react";

import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    color: "#00C001",
  };

  const [formCategoria, setFormCategoria] = useState(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setCategorias([...categorias, formCategoria]);

    console.log(categorias);
  }

  function handleSetValues(key, value) {
    setFormCategoria({ ...formCategoria, [key]: value });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Nome da Categoria:
          <input
            type="text"
            value={formCategoria.nome}
            onChange={(e) => handleSetValues("nome", e.target.value)}
          />
        </label>

        <label>
          Descrição:
          <textarea
            value={formCategoria.descricao}
            onChange={(e) => handleSetValues("descricao", e.target.value)}
          />
        </label>

        <label>
          Cor:
          <input
            type="color"
            value={formCategoria.color}
            onChange={(e) => handleSetValues("color", e.target.value)}
          />
        </label>

        <button type="submit">Cadastrar</button>
      </form>
      <ul>
        {categorias.map((categoria, index) => (
          <li key={index}>{categoria.nome}</li>
        ))}
      </ul>

      <Link to="/">Ir para home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
