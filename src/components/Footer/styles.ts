import styled from "styled-components";
import { colors } from "../../styles";

export const FooterContainer = styled.footer`
  background-color: ${colors.gray};
  padding-block: 1rem;

  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const FooterSection = styled.div``;

export const FooterLinks = styled.ul`
  display: flex;
  gap: 0.5rem;

  margin-top: 0.5rem;
`;

export const FooterLink = styled.a`
  color: ${colors.grayText};
  text-decoration: none;
`;
