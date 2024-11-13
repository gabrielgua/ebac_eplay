import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";
import { ButtonProps } from ".";

export const ButtonContainer = styled.button<Omit<ButtonProps, "type">>`
  background-color: ${(props) =>
    props.$variant === "secondary"
      ? "transparent"
      : props.$variant === "primary"
        ? colors.green
        : colors.black};
  font-size: 16px;

  color: ${colors.white};
  padding: 0.5rem 0.75rem;
  border: ${(props) =>
    props.$variant === "secondary" ? `2px solid ${colors.white}` : "none"};
  text-decoration: none;
  border-radius: 0.75rem;
  cursor: pointer;
  font-weight: bold;

  transition: all 150ms ease;

  span {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
      display: block;
    }

    p {
      font-weight: bold;
    }
  }
`;

export const ButtonLink = styled(Link)`
  cursor: pointer;
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  border: 2px solid ${colors.white};
  text-decoration: none;
`;
