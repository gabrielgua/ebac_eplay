import { HeroImage, HeroInfoContainer, Price, Title } from "./styles";

import bannerImg from "../../assets/images/banner-homem-aranha.png";
import Button from "../Button";
import Tag from "../Tag";

const Banner = () => (
  <HeroImage style={{ backgroundImage: `url(${bannerImg})` }}>
    <HeroInfoContainer className="container">
      <Tag size={"small"}>Destaque do dia</Tag>
      <div>
        <span>
          <Title>Marvel's Spider-Man: Miles Morales PS4 & PS5</Title>
          <Price>
            De R$ <span>250,00</span> <br />
            por apenas R$ 99,90
          </Price>
        </span>
        <Button type="link" title="Ir à oferta!" to="/produto">
          Aproveitar
        </Button>
      </div>
    </HeroInfoContainer>
  </HeroImage>
);

export default Banner;
