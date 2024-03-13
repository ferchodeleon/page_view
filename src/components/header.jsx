import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import logo from "../assets/logo/logo-nxtwave-transparent.png";
import icon_shop from "../assets/icons/shop.gif";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  const handleScroll = () => {
    const { scrollY } = window;
    if (scrollY > lastScrollTop) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setLastScrollTop(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <header className={`active ${visible && "visible"}`}>
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
            <Link className="button-icon-shop" to="">
              <img className="icon-shop" src={icon_shop} alt="shop" />
            </Link>
          </ol>
        </nav>
      </header>
    </>
  );
};

export default Header;
