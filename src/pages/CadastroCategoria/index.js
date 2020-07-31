import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import PageDefault from "../../components/PageDefault";
import FormField from "../../components/FormField";
import Button from "../../components/Button";

import { Form } from "./style";

function CadastroCategoria() {
  const valoresIniciais = {
    nome: "",
    descricao: "",
    color: "#00C001",
  };

  const [formCategoria, setFormCategoria] = useState(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    const url = window.location.hostname.includes("localhost")
      ? "http://localhost:3001/categoria"
      : "https://backend-rehflix.herokuapp.com/categoria";

    console.log(url);

    fetch(url).then(async (response) => {
      const res = await response.json();

      setCategorias([...res]);
    });
  }, []);

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

      <Form onSubmit={handleSubmit}>
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
          type="textarea"
          name="descricao"
        />

        <FormField
          value={formCategoria.color}
          onChange={handleSetValues}
          label="Cor"
          type="color"
          name="color"
        />

        <Button type="submit">Cadastrar</Button>
      </Form>
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
