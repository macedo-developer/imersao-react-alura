import React from "react";

function FormField({ value, onChange, label, type, name }) {
  return (
    <label>
      {label}:
      <input type={type} value={value} onChange={onChange} name={name} />
    </label>
  );
}

export default FormField;
