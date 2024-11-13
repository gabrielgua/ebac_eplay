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

import { useDispatch, useSelector } from "react-redux";
import closeIcon from "../../assets/images/fechar.png";
import { RootReducer } from "../../store";
import { close, remove } from "../../store/reducers/cart";
import { formatPrice } from "../ProductList";
import Tag from "../Tag";

const Cart = () => {
  const { visible, items } = useSelector((state: RootReducer) => state.cart);

  const dispatch = useDispatch();

  const closeCart = () => {
    dispatch(close());
  };

  const removeItem = (id: number) => {
    dispatch(remove(id));
  };

  const calculateTotalPrice = () => {
    return items.reduce((a, current) => {
      return (a += current.prices.current!);
    }, 0);
  };

  return (
    <CartWrapper className={visible ? "visible" : ""}>
      <CartBackdrop onClick={closeCart} />
      <CartAside>
        <CartTitle>Carrinho</CartTitle>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.media.thumbnail} />
              <CartItemInfo>
                <p>{item.name}</p>
                <CartItemTags>
                  <Tag>{item.details.category}</Tag>
                  <Tag>{item.details.system}</Tag>
                </CartItemTags>
                <span>{formatPrice(item.prices.current)}</span>
              </CartItemInfo>
              <CartItemRemoveButton onClick={() => removeItem(item.id)}>
                <img src={closeIcon} />
              </CartItemRemoveButton>
            </CartItem>
          ))}
        </ul>
        <CartQuantity>{items.length} jogos no carrinho</CartQuantity>
        <CartPrice>
          Total de {formatPrice(calculateTotalPrice())}
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
