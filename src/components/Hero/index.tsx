import {
  HeroBannerWrapper,
  HeroInfo,
  HeroInfoPrice,
  HeroInfoTitle,
  HeroInfoWrapper,
  HeroTags,
} from "./styles";

import { Game } from "../../models/Game";
import { colors } from "../../styles";
import Button from "../Button";
import { formatPrice } from "../ProductList";
import Tag from "../Tag";
import { useDispatch } from "react-redux";
import { add, open } from "../../store/reducers/cart";

type HeroProps = {
  game: Game;
};

const Hero = ({ game }: HeroProps) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(game));
    dispatch(open());
  };

  return (
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
            <Button
              onClick={addToCart}
              type="button"
              children={"Adicionar ao carrinho"}
            />
          ) : (
            <p>Em breve</p>
          )}
        </HeroInfo>
      </HeroInfoWrapper>
    </HeroBannerWrapper>
  );
};

export default Hero;
