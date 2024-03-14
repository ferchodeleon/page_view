import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import logo from "../assets/logo/logo-nxtwave-transparent.png";
import icon_shop from "../assets/icons/shop.gif";
import menu from "../assets/icons/hamburger.svg";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [open, setOpen] = useState(true);

  const handleScroll = () => {
    const { scrollY } = window;
    if (scrollY > lastScrollTop) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setLastScrollTop(scrollY);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    console.log("OPEN", open),
    (
      <>
        <header className={`active ${visible && "visible"}`}>
          <figure>
            <img src={logo} alt="logo_nxtwave" />
          </figure>
          <nav style={{ display: open && "none" }} className="nav-menu">
            {/* <nav className={`${open ? "nav-menu-open" : "nav-menu"}`}> */}
            <ol>
              <li>Home</li>
              <li>Fotos</li>
              <li>Historia</li>
              <li>Videos</li>
              <li>Shop</li>
              <Link
                className="button-icon-shop"
                to="https://developer.mozilla.org/es/docs/Web/CSS/box-shadow"
              >
                <img className="icon-shop" src={icon_shop} alt="shop" />
              </Link>
            </ol>
          </nav>
          <button onClick={handleClick} className="hamburger-menu">
            <img src={menu} alt="menu-hamburgesa" />
          </button>
        </header>
      </>
    )
  );
};

export default Header;
