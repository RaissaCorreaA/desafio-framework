import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import logo from "../../assets/frameworkLogo.png";

import "./styles.css";

function Header() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <header className="Header">
      <img src={logo} className="logo" alt="logo da FramWork"/>
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={0}
        classNames="NavAnimation"
        unmountOnExit
      >
        <nav className="Nav">
          <a href="/">Home</a>
          <a href="/posts">Posts</a>
          <a href="/albuns">Álbuns</a>
          <a href="/to-dos">ToDos</a>

        </nav>
      </CSSTransition>
      <button onClick={toggleNav} className="menuIcon">
        Menu
      </button>
    </header>
  );
}
export default Header;
