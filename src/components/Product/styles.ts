import styled from "styled-components";
import { colors } from "../../styles";

export const ProductCard = styled.div`
  background-color: ${colors.gray};
  border-radius: 0.5rem;
  padding: 0.5rem;

  max-height: 450px;
`;

export const ProductImgContainer = styled.div`
  position: relative;
`;

export const ProductImg = styled.img`
  border-radius: 0.25rem;
  display: block;
  width: 100%;
  height: 250px;
  object-position: top;
  object-fit: cover;
`;

export const ProductImgTags = styled.div`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 0.5rem;
  z-index: 1;
  top: 0;
  right: 0;
  padding: 0.5rem;
`;

export const ProductTitle = styled.h3`
  font-weight: bold;
  font-size: 16px;
  display: block;
  margin-block: 1rem 0.5rem;
`;

export const ProductTags = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const ProductDescription = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-block-start: 1rem;

  display: -webkit-box;
  max-width: 200px;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
