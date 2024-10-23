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
          <FooterLink>RPG</FooterLink>
          <FooterLink>Ação</FooterLink>
          <FooterLink>Aventura</FooterLink>
          <FooterLink>Esportes</FooterLink>
          <FooterLink>Simulação</FooterLink>
          <FooterLink>Estratégia</FooterLink>
          <FooterLink>FPS</FooterLink>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <h4>Acesso rápido</h4>
        <FooterLinks>
          <FooterLink>Novidades</FooterLink>
          <FooterLink>Promoções</FooterLink>
          <FooterLink>Em breve</FooterLink>
        </FooterLinks>
      </FooterSection>
      <FooterSection>
        <h4>{new Date().getFullYear()} - &copy; gabrielgua</h4>
      </FooterSection>
    </div>
  </FooterContainer>
);

export default Footer;
