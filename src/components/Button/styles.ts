import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";
import { ButtonProps } from ".";

export const ButtonContainer = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.variant === "primary" ? colors.green : "transparent"};
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  padding: 0.75rem 1rem;
  border: ${(props) =>
    props.variant === "primary" ? "none" : `2px solid ${colors.white}`};
  text-decoration: none;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const ButtonLink = styled(Link)`
  cursor: pointer;
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid ${colors.white};
  text-decoration: none;
`;
