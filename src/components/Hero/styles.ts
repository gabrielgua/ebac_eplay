import styled from "styled-components";
import { colors } from "../../styles";

export const HeroBannerWrapper = styled.div`
  margin-block-start: 2rem;
  position: relative;
  display: block;
  height: 480px;
  width: 100%;

  background-repeat: no-repeat;
  background-size: cover;

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.5;
    background-color: black;
  }

  .container {
    z-index: 1;
    position: relative;
  }
`;

export const HeroInfoWrapper = styled.div`
  height: 100%;
  padding-block-start: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const HeroTags = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const HeroInfo = styled.div`
  max-width: max-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background-color: ${colors.black};

  font-weight: bold;
`;

export const HeroInfoTitle = styled.h2`
  font-size: 32px;
`;

export const HeroInfoPrice = styled.p`
  font-size: 18px;
`;
