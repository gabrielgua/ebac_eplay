import styled from "styled-components";

export const ProductListGrid = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
`;
