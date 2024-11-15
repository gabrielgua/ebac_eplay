import styled from "styled-components";
import { TagContainer } from "../Tag/styles";
import { ButtonLink } from "../Button/styles";

export const HeroImage = styled.div`
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-top: 2rem;
  font-weight: bold;
  position: relative;

  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 560px;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

export const HeroInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 2rem;
  z-index: 1;
  height: 560px;

  ${TagContainer} {
    grid-column: span 2;
    max-height: max-content;
    margin-bottom: auto;
  }

  > div {
    display: flex;

    ${ButtonLink} {
      align-self: flex-end;
      max-height: max-content;
      margin-left: auto;
    }
  }
`;

export const Title = styled.h2`
  font-size: 32px;
  max-width: 450px;
`;

export const Price = styled.p`
  font-size: 18px;
  margin-top: 1.5rem;

  span {
    text-decoration: line-through;
  }
`;
