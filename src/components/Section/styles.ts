import styled from "styled-components";
import { SectionProps } from ".";
import { colors } from "../../styles";
import { ProductCard } from "../Product/styles";

export const SectionWrapper = styled.section<
  Omit<SectionProps, "title" | "games">
>`
  padding-block: 3rem;
  background-color: ${(props) =>
    props.theme === "black" ? colors.black : colors.gray};

  ${ProductCard} {
    background-color: ${(props) =>
      props.theme === "black" ? colors.gray : colors.black};
  }

  p {
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    max-width: 640px;
  }
`;

export const SectionTitle = styled.h2`
  margin-bottom: 2rem;
`;
