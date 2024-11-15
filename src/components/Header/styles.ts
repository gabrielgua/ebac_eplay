import styled from "styled-components";
import { colors } from "../../styles";

export const HeaderBackground = styled.header`
  background-color: ${colors.gray};
  margin-top: 2rem;
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

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

  @media (max-width: 768px) {
    nav {
      display: none;
    }
  }
`;

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;

  &.invisible {
    display: none;
  }
`;

export const Links = styled.ul`
  display: flex;
  gap: 1rem;
  flex-grow: 1;

  @media (max-width: 768px) {
    flex-direction: column;

    * {
      display: block;
    }

    li > a {
      padding: 0.5rem 0;
    }
  }
`;

export const CartButton = styled.a`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    span {
      display: none;
    }
  }
`;

export const HamburguerMenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  cursor: pointer;

  span {
    height: 2px;
    display: block;
    width: 1.25rem;
    background-color: ${colors.white};
    border-radius: 0.25rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
