import { Game } from "../../models/Game";
import Product, { ProductProps } from "../Product";
import { ProductListGrid } from "./styles";

export type ProductListProps = {
  games: Game[];
};

export const formatPrice = (price = 0) => {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
};

const ProductList = ({ games }: ProductListProps) => {
  const getGameTags = (game: Game) => {
    const tags: string[] = [];

    if (game.release_date) tags.push(game.release_date);

    if (game.prices.discount) {
      tags.push(formatPrice(game.prices.current));
      tags.push(`-${game.prices.discount}%`);
    }

    return tags;
  };

  return (
    <ProductListGrid>
      {games.map((game) => (
        <Product
          key={game.id}
          title={game.name}
          category={game.details.category}
          description={game.description}
          imageUrl={game.media.thumbnail}
          infos={getGameTags(game)}
          platform={game.details.system}
        ></Product>
      ))}
    </ProductListGrid>
  );
};

export default ProductList;
