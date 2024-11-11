import styled from "styled-components";
import { colors } from "../../styles";

export const HeaderBackground = styled.header`
  background-color: ${colors.gray};
  margin-top: 2rem;
  padding: 1.5rem;
  gap: 2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    display: block;
  }

  a {
    color: ${colors.white};
    font-weight: bold;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  nav {
    margin-right: auto;
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const CartButton = styled.a`
  display: flex;
  gap: 1rem;
  align-items: center;
`;
