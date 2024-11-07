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
  id: number;
  title: string;
  category: string;
  platform: string;
  description: string;
  infos: string[];
  imageUrl: string;
};

const Product = ({
  id,
  title,
  category,
  platform,
  description,
  infos,
  imageUrl,
}: ProductProps) => {
  return (
    <ProductCard to={`/game/${id}`}>
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
