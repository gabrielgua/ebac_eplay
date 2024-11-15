import {
  CartButton,
  HamburguerMenuIcon,
  HeaderBackground,
  HeaderRow,
  Links,
} from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import cart from "../../assets/images/carrinho.svg";
import logo from "../../assets/images/logo.svg";
import { RootReducer } from "../../store";
import { open } from "../../store/reducers/cart";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const { items } = useSelector((state: RootReducer) => state.cart);
  const dispatch = useDispatch();

  const openCart = () => {
    dispatch(open());
  };

  return (
    <HeaderBackground>
      <HeaderRow>
        <HamburguerMenuIcon onClick={() => setMobileOpen(!mobileOpen)}>
          <span />
          <span />
          <span />
        </HamburguerMenuIcon>
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
          <p>
            {items.length} <span> - Produto(s)</span>{" "}
          </p>
          <img src={cart} alt="Carrinho" />
        </CartButton>
      </HeaderRow>
      <HeaderRow className={mobileOpen ? "" : "invisible"}>
        <Links>
          <li>
            <a>
              <Link to="/categories">Categorias</Link>
            </a>
          </li>
          <li>
            <a>
              <HashLink to="/#coming-soon">Novidades</HashLink>
            </a>
          </li>
          <li>
            <a>
              <HashLink to="/#on-sale">Promoções</HashLink>
            </a>
          </li>
        </Links>
      </HeaderRow>
    </HeaderBackground>
  );
};

export default Header;
