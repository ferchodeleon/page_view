import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

import logo from "../assets/logo/logo-nxtwave-transparent.png";
import icon_shop from "../assets/icons/shop.gif";
import menu from "../assets/icons/hamburger.svg";

const Header = () => {
  const [visible, setVisible] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [open, setOpen] = useState(false);

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
        <header className={`$ active ${visible && "visible"}`}>
          <figure>
            <img src={logo} alt="logo_nxtwave" />
          </figure>
          {/* <nav className="nav-menu"> */}
          {/* <nav style={{ display: open && "none" }} className="nav-menu"> */}
          <nav className={`${open ? "nav-menu-open" : "nav-menu"}`}>
            <ol>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="https://nxtwave.pixieset.com/nxtwave/" target="_blank">
                <li>Fotos</li>
              </Link>
              <Link to="/history">
                <li>Historia</li>
              </Link>
              <Link target="_blank" to="https://www.youtube.com/@NxtWaveBand">
                <li>Videos</li>
              </Link>
              <Link
                className="button-icon-shop"
                to="https://coffeenjesus.com/en/search?q=nxtwave"
                target="_blank"
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
