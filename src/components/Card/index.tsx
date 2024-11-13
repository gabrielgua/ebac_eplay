import { CardWrapper } from "./styles";

type CardProps = {
  title: string;
  children: JSX.Element;
};

const Card = ({ title, children }: CardProps) => (
  <CardWrapper>
    <h2>{title}</h2>
    {children}
  </CardWrapper>
);

export default Card;
