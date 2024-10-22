import styled from "styled-components";
import { ProductListProps } from ".";
import { colors } from "../../styles";
import { ProductCard } from "../Product/styles";

export const ProductListContainer = styled.section<
  Omit<ProductListProps, "title">
>`
  padding-block: 3rem;
  background-color: ${(props) =>
    props.bgTheme === "black" ? colors.black : colors.gray};

  ${ProductCard} {
    background-color: ${(props) =>
      props.bgTheme === "black" ? colors.gray : colors.black};
  }
`;

export const ProductListTitle = styled.h2`
  margin-bottom: 2rem;
`;

export const ProductListGrid = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
`;
