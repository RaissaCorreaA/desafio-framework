import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import logo from "../../assets/frameworkLogo.png";

import "./styles.css";

const HeaderLink = ({ onClick, title, pathname }) => {
  const location = useLocation();

  return (
    <div className={"labelContainer"} onClick={onClick} id={title + "-button"}>
      <label
        className={
          pathname === location.pathname ? "labelTitleClicked" : "labelTitle"
        }
      >
        {title}
      </label>
    </div>
  );
};

function Header() {
  const history = useHistory();
  const handlePageLoad = (pathnamme) => {
    history.push(pathnamme);
  };

  return (
    <header>
      <div id="headerBox">
        <div className="leftContent">
          <img src={logo} className="imgLogo" alt="logo Framework" />
        </div>
        <div className="rightContent">
          <>
            <HeaderLink
              pathname="/"
              title="Home"
              onClick={() => handlePageLoad("/")}
            />
            <HeaderLink
              pathname="/albuns"
              title="Álbuns"
              onClick={() => handlePageLoad("/albuns")}
            />
            <HeaderLink
              pathname="/posts"
              title="Posts"
              onClick={() => handlePageLoad("/posts")}
            />
            <HeaderLink
              pathname="/to-dos"
              title="ToDos"
              onClick={() => handlePageLoad("/to-dos")}
            />
          </>
        </div>
      </div>
    </header>
  );
}
export default React.memo(Header);
