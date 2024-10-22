import Product, { ProductProps } from "../Product";
import {
  ProductListContainer,
  ProductListGrid,
  ProductListTitle,
} from "./styles";

export type ProductListProps = {
  title: string;
  bgTheme: "gray" | "black";
};

const products: ProductProps[] = [
  {
    title: "Resident Evil 4",
    category: "Ação",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque veritatis tenetur sapiente inventore nesciunt at, placeat vero, ipsa numquam minus provident quis assumenda soluta voluptatibus, maiores veniam minima laudantium hic.",
    imageUrl: "https://placehold.co/222x250",
    infos: ["R$ 199,90", "Oferta -10%"],
    platform: "PC",
  },
  {
    title: "Resident Evil 4",
    category: "Ação",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque veritatis tenetur sapiente inventore nesciunt at, placeat vero, ipsa numquam minus provident quis assumenda soluta voluptatibus, maiores veniam minima laudantium hic.",
    imageUrl: "https://placehold.co/222x250",
    infos: ["R$ 199,90", "Oferta -10%"],
    platform: "PC",
  },
  {
    title: "Resident Evil 4",
    category: "Ação",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque veritatis tenetur sapiente inventore nesciunt at, placeat vero, ipsa numquam minus provident quis assumenda soluta voluptatibus, maiores veniam minima laudantium hic.",
    imageUrl: "https://placehold.co/222x250",
    infos: ["R$ 199,90", "Oferta -10%"],
    platform: "PC",
  },
  {
    title: "Resident Evil 4",
    category: "Ação",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque veritatis tenetur sapiente inventore nesciunt at, placeat vero, ipsa numquam minus provident quis assumenda soluta voluptatibus, maiores veniam minima laudantium hic.",
    imageUrl: "https://placehold.co/222x250",
    infos: ["R$ 199,90", "Oferta -10%"],
    platform: "PC",
  },
];

const ProductList = ({ bgTheme, title }: ProductListProps) => (
  <ProductListContainer bgTheme={bgTheme}>
    <div className="container">
      <ProductListTitle>{title}</ProductListTitle>
      <ProductListGrid>
        {products.map((product) => (
          <Product
            key={product.title}
            title={product.title}
            category={product.category}
            description={product.description}
            imageUrl={product.imageUrl}
            infos={product.infos}
            platform={product.platform}
          ></Product>
        ))}
      </ProductListGrid>
    </div>
  </ProductListContainer>
);

export default ProductList;
