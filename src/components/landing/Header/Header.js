import React from "react";
import logoMesto from "../../../images/logo.svg";
function Header() {
  return (
    <>
      <header className="header">
        <a className="header__logo-link" href="#root">
          <img
            className="header__logo-img"
            src={logoMesto}
            alt="Логотип Mesto Russia"
          />
        </a>
      </header>
    </>
  );
}

export default Header;
