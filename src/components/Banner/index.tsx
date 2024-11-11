import { HeroImage, HeroInfoContainer, Price, Title } from "./styles";

import Button from "../Button";
import { formatPrice } from "../ProductList";
import Tag from "../Tag";

import { useGetFeaturedQuery } from "../../services/api";

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedQuery();

  if (!game) {
    return <h3>"Loading..."</h3>;
  }

  return (
    <HeroImage style={{ backgroundImage: `url(${game.media.cover})` }}>
      <HeroInfoContainer className="container">
        <Tag size={"small"}>Destaque do dia</Tag>
        <div>
          <span>
            <Title>{game.name}</Title>
            <Price>
              De R$ <span>{formatPrice(game.prices.old)}</span> <br />
              por apenas R$ {formatPrice(game.prices.current)}
            </Price>
          </span>
          <Button type="link" title="Ir à oferta!" to={`/game/${game.id}`}>
            Aproveitar
          </Button>
        </div>
      </HeroInfoContainer>
    </HeroImage>
  );
};

export default Banner;
