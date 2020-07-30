import styled from "styled-components";

export const Field = styled.div`
  position: relative;
`;

export const Input = styled.input`
  border: none;
  margin-top: 12px;
  width: 100%;
  height: 48px;
  padding-left: 12px;

  border-radius: 8px;
`;

export const Label = styled.label`
  position: absolute;
  pointer-events: none;
  left: 16px;
  top: 24px;
  transition: 0.5s ease all;

  color: var(--blackLighter);

  ${Input}:focus ~ & {
    top: 16px;
    left: 8px;
    font-size: 11px;
    opacity: 0.6;
  }
`;
