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
    <div className="header-container">
      <header className={`header-section ${bgColor}`}>
        <div className="brand">CoderDuo</div>
        <nav className="nav-bar">
          <ul>
            <li>
              <a href="#" onClick={() => window.scrollTo({
                  top: 750,
                  behavior: "smooth"
              })}>Our Stack</a>
            </li>
            <li>
              <a href="#" onClick={() => window.scrollTo({
                  top: 1450,
                  behavior: "smooth"
              })}>Products </a>
            </li>
            <li>
              <a href="#"> Contact Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
