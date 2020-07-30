import React, { useState } from "react";

import PageDefault from "../../components/PageDefault";
import FormField from "../../components/FormField";
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
  }

  function handleSetValues(e) {
    const { value } = e.target;

    setFormCategoria({
      ...formCategoria,
      [e.target.getAttribute("name")]: value,
    });
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          value={formCategoria.nome}
          onChange={handleSetValues}
          label="Nome da Categoria"
          type="text"
          name="nome"
        />

        <FormField
          value={formCategoria.descricao}
          onChange={handleSetValues}
          label="Descrição"
          type="text"
          name="descricao"
        />

        <FormField
          value={formCategoria.color}
          onChange={handleSetValues}
          label="Cor"
          type="color"
          name="color"
        />

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
