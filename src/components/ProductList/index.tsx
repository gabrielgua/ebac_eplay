import Game from "../../models/Game";
import Product, { ProductProps } from "../Product";
import { ProductListGrid } from "./styles";

export type ProductListProps = {
  games: Game[];
};

const ProductList = ({ games }: ProductListProps) => (
  <ProductListGrid>
    {games.map((game) => (
      <Product
        key={game.id}
        title={game.title}
        category={game.category}
        description={game.description}
        imageUrl={game.image}
        infos={game.infos}
        platform={game.platform}
      ></Product>
    ))}
  </ProductListGrid>
);

export default ProductList;
