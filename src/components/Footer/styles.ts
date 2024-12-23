import styled from "styled-components";
import { colors } from "../../styles";
import { HashLink } from "react-router-hash-link";

export const FooterContainer = styled.footer`
  background-color: ${colors.gray};
  padding-block: 2rem;
  margin-top: auto;

  .container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const FooterSection = styled.div`
  margin-block: 0.5rem;
`;

export const FooterLinks = styled.ul`
  display: flex;
  gap: 0.5rem;

  margin-top: 0.5rem;
`;

export const FooterLink = styled(HashLink)`
  color: ${colors.grayText};
  text-decoration: none;
`;
