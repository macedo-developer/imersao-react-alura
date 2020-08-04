import React from "react";

import PageDefault from "../../components/PageDefault";
import { Link } from "react-router-dom";

import FormField from "../../components/FormField";
import Button from "../../components/Button";

import { Form } from "./style";

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <Form>
        <FormField
          value=""
          onChange={() => {}}
          label="Título do vídeo"
          type="text"
          name="title"
        />

        <FormField
          value=""
          onChange={() => {}}
          label="URL do vídeo"
          type="text"
          name="url"
        />

        <FormField
          value=""
          onChange={() => {}}
          label="Categoria"
          type="text"
          name="url"
        />

        <Button type="onSubmit">Cadastrar Vídeo</Button>
      </Form>
      {/* <Link to="/cadastro/categoria">Cadastrar Categoria</Link> */}
    </PageDefault>
  );
}

export default CadastroVideo;
