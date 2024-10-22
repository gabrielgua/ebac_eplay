import styled from "styled-components";
import { colors } from "../../styles";
import { Link } from "react-router-dom";

export const ButtonContainer = styled.button`
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  padding: 0.75rem 1rem;
  border: 2px solid ${colors.white};
  text-decoration: none;
  border-radius: 0.5rem;
`;

export const ButtonLink = styled(Link)`
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  color: ${colors.white};
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  border: 2px solid ${colors.white};
  text-decoration: none;
`;
