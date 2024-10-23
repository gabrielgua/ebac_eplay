import Game from "../../models/Game";
import Product, { ProductProps } from "../Product";
import {
  ProductListContainer,
  ProductListGrid,
  ProductListTitle,
} from "./styles";

export type ProductListProps = {
  title: string;
  bgTheme: "gray" | "black";
  games: Game[];
};

const ProductList = ({ bgTheme, title, games }: ProductListProps) => (
  <ProductListContainer bgTheme={bgTheme}>
    <div className="container">
      <ProductListTitle>{title}</ProductListTitle>
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
    </div>
  </ProductListContainer>
);

export default ProductList;
