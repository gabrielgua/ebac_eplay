import { Game } from "../../models/Game";
import Tag from "../Tag";
import {
  ProductCard,
  ProductDescription,
  ProductImg,
  ProductImgContainer,
  ProductImgTags,
  ProductTags,
  ProductTitle,
} from "./styles";

export type ProductProps = {
  title: string;
  category: string;
  platform: string;
  description: string;
  infos: string[];
  imageUrl: string;
};

const Product = ({
  title,
  category,
  platform,
  description,
  infos,
  imageUrl,
}: ProductProps) => {
  return (
    <ProductCard>
      <ProductImgContainer>
        <ProductImg src={imageUrl} alt={title} />
        <ProductImgTags>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </ProductImgTags>
      </ProductImgContainer>
      <ProductTitle>{title}</ProductTitle>
      <ProductTags>
        <Tag>{category}</Tag>
        <Tag>{platform}</Tag>
      </ProductTags>
      <ProductDescription>{description}</ProductDescription>
    </ProductCard>
  );
};

export default Product;
