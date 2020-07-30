import React from "react";

import { Field, Label, Input } from "./style";

function FormField({ value, onChange, label, type, name }) {
  return (
    <Field>
      <Input type={type} value={value} onChange={onChange} name={name} />
      <Label>{label}</Label>
    </Field>
  );
}

export default FormField;
