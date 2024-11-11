import { CartButton, HeaderBackground, Links } from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cart from "../../assets/images/carrinho.svg";
import logo from "../../assets/images/logo.svg";
import { open } from "../../store/reducers/cart";
import { RootReducer } from "../../store";

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const openCart = () => {
    dispatch(open());
  };

  return (
    <HeaderBackground>
      <Link to="/">
        <img src={logo} alt="EPLAY" />
      </Link>
      <nav>
        <Links>
          <li>
            <Link to="/categories">Categorias</Link>
          </li>
          <li>
            <a href="#">Novidades</a>
          </li>
          <li>
            <a href="#">Promoções</a>
          </li>
        </Links>
      </nav>
      <CartButton onClick={openCart}>
        <p>{items.length} - Produto(s)</p>
        <img src={cart} alt="Carrinho" />
      </CartButton>
    </HeaderBackground>
  );
};

export default Header;
