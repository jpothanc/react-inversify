import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [navStyle, setNavStyle] = useState("nav");
  const [hamStyle, setHamStyle] = useState("hamburger");

  const handleHamburger = (event: React.MouseEvent<HTMLDivElement>) => {
    const divIdentifier = event.currentTarget.getAttribute("data-identifier");
    console.log(divIdentifier);

    var style = navStyle === "nav" ? "nav--open" : "nav";
    setNavStyle(style);

    style = hamStyle === "hamburger" ? "hamburger--open" : "hamburger";
    setHamStyle(style);
  };

  return (
    <>
      <header className="header">
        <div className="top-bar">
          <div className="top-bar__content">
            <nav className={navStyle} data-identifier="navStyle">
              <ul className="nav__list">
                <li className="nav__item">
                  <Link className="nav__link" to="/">
                    DataStore
                  </Link>
                </li>
                <li className="nav__item">
                  <Link className="nav__link" to="/about">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="bottom-bar">
          <div className="bottom-bar__content">
            <div className="banner">
              <a href="#" className="logo">
                <img src="/vite.svg" alt="logo" className="logo__img" />
                <span className="logo__text">Trader Pad</span>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
