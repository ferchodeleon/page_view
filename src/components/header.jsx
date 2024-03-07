import { Link } from "react-router-dom";

import logo from "../assets/logo/logo-nxtwave-transparent.png";
import icon_shop from "../assets/icons/shop.gif";

const Header = () => {
  return (
    <>
      <header>
        <figure>
          <img src={logo} alt="logo_nxtwave" />
        </figure>
        <nav className="nav-menu">
          <ol>
            <li>Home</li>
            <li>Fotos</li>
            <li>Historia</li>
            <li>Videos</li>
            <li>Shop</li>
          </ol>
        </nav>
        <Link className="button-icon-shop" to="">
          <img className="icon-shop" src={icon_shop} alt="shop" />
        </Link>
      </header>
    </>
  );
};

export default Header;
