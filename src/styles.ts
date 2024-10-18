import styled, { createGlobalStyle } from "styled-components";

export const colors = {
  white: "#EEEEEE",
  black: "#111",
  gray: "#333",
  green: "#10AC84",
};

export const GlobalStyles = createGlobalStyle`
  	* {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
      list-style: none;
    }

    body {
      background-color: ${colors.black};
      color: ${colors.white};
    }
`;

export const Container = styled.div`
  width: min(1024px, 100% - 4rem);
  margin-inline: auto;
`;
