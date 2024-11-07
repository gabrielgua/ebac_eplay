import {
  HeroBannerWrapper,
  HeroInfo,
  HeroInfoPrice,
  HeroInfoTitle,
  HeroInfoWrapper,
  HeroTags,
} from "./styles";

import heroImg from "../../assets/images/fundo_hogwarts.png";
import Tag from "../Tag";
import Button from "../Button";
import { colors } from "../../styles";
const Hero = () => (
  <HeroBannerWrapper style={{ backgroundImage: `url(${heroImg})` }}>
    <HeroInfoWrapper className="container">
      <HeroTags>
        <Tag>RPG</Tag>
        <Tag>PC</Tag>
      </HeroTags>
      <HeroInfo>
        <HeroInfoTitle>Hogwarts Legacy</HeroInfoTitle>
        <HeroInfoPrice>
          <span
            style={{
              textDecoration: "line-through",
              color: `${colors.grayText}`,
              fontWeight: "normal",
            }}
          >
            De R$ 250,00
          </span>
          <br /> Por R$ 190,99
        </HeroInfoPrice>
        <Button type="button" children={"Adicionar ao carrinho"} />
      </HeroInfo>
    </HeroInfoWrapper>
  </HeroBannerWrapper>
);

export default Hero;
