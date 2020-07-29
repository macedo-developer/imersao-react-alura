import styled from "styled-components";

export const Main = styled.div`
  display: flex;
`;

export const Information = styled.div`
  text-align: center;
  min-width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  > h1 {
    font-size: 102px;
    letter-spacing: 12px;

    margin-bottom: 0px;
    color: var(--primary);
  }

  > span {
    font-weight: bold;
  }

  > a {
    width: 200px;
    text-decoration: none;
    margin-top: 30px;
    padding: 12px;

    background: var(--primary);
    border-radius: 24px;

    transition: background 400ms;

    &:hover {
      background: var(--frontEnd);
    }
  }
`;
export const Animation = styled.div``;
