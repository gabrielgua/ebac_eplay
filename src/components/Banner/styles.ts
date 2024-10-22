import styled from "styled-components";
import { TagContainer } from "../Tag/styles";
import Button from "../Button";
import { ButtonLink } from "../Button/styles";

export const HeroImage = styled.div`
  width: 100%;
  height: 560px;
  display: block;
  background-size: cover;
  background-position: top;
  background-repeat: no-repeat;
  margin-top: 4rem;
  font-weight: bold;

  display: flex;
  flex-direction: column;
`;

export const HeroInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-block: 2rem;

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
