import {
  FooterContainer,
  FooterLink,
  FooterLinks,
  FooterSection,
} from "./styles";

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <FooterSection>
        <h4>Categorias</h4>
        <FooterLinks>
          <FooterLink to="/categories#rpg">RPG</FooterLink>
          <FooterLink to="/categories#action">Ação</FooterLink>
          <FooterLink to="/categories#sports">Esportes</FooterLink>
          <FooterLink to="/categories#simulation">Simulação</FooterLink>
          <FooterLink to="/categories#fighting">Luta</FooterLink>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <h4>Acesso rápido</h4>
        <FooterLinks>
          <FooterLink to="/#coming-soon">Em breve</FooterLink>
          <FooterLink to="/#on-sale">Promoções</FooterLink>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <h4>{new Date().getFullYear()} - &copy; gabrielgua</h4>
      </FooterSection>
    </div>
  </FooterContainer>
);

export default Footer;
