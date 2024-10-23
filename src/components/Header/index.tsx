import { CartLink, HeaderBackground, Links } from "./styles";

import logo from "../../assets/images/logo.svg";
import cart from "../../assets/images/carrinho.svg";
import { Link } from "react-router-dom";

const Header = () => (
  <HeaderBackground>
    <img src={logo} alt="EPLAY" />
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
    <CartLink>
      <p>0 - Produto(s)</p>
      <img src={cart} alt="Carrinho" />
    </CartLink>
  </HeaderBackground>
);

export default Header;
