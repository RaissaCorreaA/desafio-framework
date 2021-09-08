import React from "react";
import "./styles.css";
import padawans from "../../assets/padawansV.png";

let Home = () => {
  return (
    <div id="homePage">
      <div className="logoHome">
        <img src={padawans} alt="logo desafio padawans" />
      </div>
      <div className="about">
        <h1 className="Nome">Raíssa Corrêa</h1>
        <div className="GitHub">
          <a
            className="github"
            href="https://github.com/RaissaCorreaA"
            target="_blank"
          >
            Github
          </a>
        </div>
        <div className="Linkedin">
          <a
            className="linkedin"
            href="https://www.linkedin.com/in/raissacorrea25/"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
