import styled from "styled-components";
import { colors } from "../../styles";
import { ButtonContainer } from "../Button/styles";

export const CartWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 2;

  &.visible {
    display: flex;
  }
`;

export const CartBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const CartAside = styled.aside`
  position: relative;
  background-color: ${colors.gray};
  padding: 1.5rem;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    width: 100%;
  }
`;

export const CartTitle = styled.h2`
  margin-bottom: 1rem;
`;

export const CartQuantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${colors.white};
  margin-block: 1rem;
`;

export const CartPrice = styled.p`
  font-weight: bold;
  font-size: 14px;
  color: ${colors.white};
  margin-bottom: 1rem;

  span {
    display: block;
    font-size: 12px;
    color: ${colors.grayText};
  }
`;

export const CartItem = styled.li`
  display: flex;
  gap: 1rem;
  position: relative;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
  }

  padding-block: 1rem;
  border-bottom: 1px solid ${colors.grayText};
`;

export const CartItemInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-weight: bold;
    font-size: 16px;
  }

  span {
    margin-top: auto;
    font-weight: bold;
    font-size: 14px;
  }
`;

export const CartItemTags = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const CartItemRemoveButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
  display: grid;
  place-items: center;
  align-self: flex-start;

  > img {
    width: 16px;
    height: 16px;
  }
`;
