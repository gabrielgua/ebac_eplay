import Button from "../Button";
import {
  CartAside,
  CartBackdrop,
  CartItem,
  CartItemInfo,
  CartItemRemoveButton,
  CartItemTags,
  CartPrice,
  CartQuantity,
  CartTitle,
  CartWrapper,
} from "./styles";

import img from "../../assets/images/star_wars.png";
import Tag from "../Tag";
import closeIcon from "../../assets/images/fechar.png";
import { useDispatch, useSelector } from "react-redux";
import { RootReducer } from "../../store";
import { close } from "../../store/reducers/cart";

const Cart = () => {
  const { visible } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  return (
    <CartWrapper className={visible ? "visible" : ""}>
      <CartBackdrop onClick={closeCart} />
      <CartAside>
        <CartTitle>Carrinho</CartTitle>
        <ul>
          <CartItem>
            <img src={img} />
            <CartItemInfo>
              <p>Nome do jogo</p>
              <CartItemTags>
                <Tag>RPG</Tag>
                <Tag>PS5</Tag>
              </CartItemTags>
              <span>R$ 140,99</span>
            </CartItemInfo>
            <CartItemRemoveButton>
              <img src={closeIcon} />
            </CartItemRemoveButton>
          </CartItem>
        </ul>
        <CartQuantity>2 jogos no carrinho</CartQuantity>
        <CartPrice>
          Total de R$ 330,00
          <span>Em até 6x sem juros</span>
        </CartPrice>
        <Button title="Finalizar compra" type="button">
          Continuar com a compra
        </Button>
      </CartAside>
    </CartWrapper>
  );
};

export default Cart;
