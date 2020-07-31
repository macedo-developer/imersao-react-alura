import React from "react";

import { Field, Label, Input } from "./style";

function FormField({ value, onChange, label, type, name }) {
  const isTextArea = type === "textarea";
  const tag = isTextArea ? "textarea" : "input";

  const hasValue = Boolean(value.length);
  return (
    <Field>
      <Label>
        <Input
          as={tag}
          type={type}
          value={value}
          hasValue={hasValue}
          onChange={onChange}
          name={name}
        />
        <Label.Text>{label}</Label.Text>
      </Label>
    </Field>
  );
}

export default FormField;
