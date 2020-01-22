import React, { useState, useEffect } from "react";

const Header = () => {
  const [bgColor, changeBgColor] = useState("transparent");

  const onWindowScroll = () => {
    if (window.scrollY > 200) {
      changeBgColor("white");
    } else {
      changeBgColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);

    return () => {
      window.removeEventListener("scroll", onWindowScroll);
    };
  }, []);

  return (
    <div className="section header-container">
      <header className={`header-section ${bgColor}`}>
        <div className="brand">CoderDuo</div>
        <nav className="nav-bar">
          <ul>
            <li>
              <a href="#">Our Stack</a>
            </li>
            <li>
              <a href="#">Products </a>
            </li>
            <li>
              <a href="#"> Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
      <div className="hero-text-container"> 
      <h1 className="hero-text top">
        Your ideas
      </h1>
      <h1 className="hero-text bottom">
        Our Engineering
      </h1>
      </div>
    </div>
  );
};

export default Header;
