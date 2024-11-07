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
import { Game } from "../../models/Game";
import { formatPrice } from "../ProductList";

type HeroProps = {
  game: Game;
};

const Hero = ({ game }: HeroProps) => (
  <HeroBannerWrapper style={{ backgroundImage: `url(${game.media.cover})` }}>
    <HeroInfoWrapper className="container">
      <HeroTags>
        <Tag>{game.details.category}</Tag>
        <Tag>{game.details.system}</Tag>
      </HeroTags>
      <HeroInfo>
        <HeroInfoTitle>{game.name}</HeroInfoTitle>
        <HeroInfoPrice>
          {game.prices.discount && (
            <span
              style={{
                textDecoration: "line-through",
                color: `${colors.grayText}`,
                fontWeight: "normal",
              }}
            >
              De {formatPrice(game.prices.old)}
            </span>
          )}
          <br />{" "}
          {game.prices.current && <>Por {formatPrice(game.prices.current)}</>}
        </HeroInfoPrice>

        {game.prices.current ? (
          <Button type="button" children={"Adicionar ao carrinho"} />
        ) : (
          <p>Em breve</p>
        )}
      </HeroInfo>
    </HeroInfoWrapper>
  </HeroBannerWrapper>
);

export default Hero;
