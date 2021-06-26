import React from "react";
import { navigate } from "@reach/router";
import { Button } from "antd";

import logo from "../../assets/Bitcoin-white.svg";

interface props {
  page: string;
  title: string;
}

const Header = ({ page, title }: props) => {
  return (
    <header className="header" id="page-header">
      <div className="header__home">
        <img className="header__logo" src={logo} alt="blockchain-logo" />
      </div>
      <ul className="header__breadcrumb">
        {page === "dashboard" && (
          <li className="header__breadcrumb__item header__breadcrumb__level-1">
            <div className="header__breadcrumb__item__content">Home</div>
          </li>
        )}
        {page !== "dashboard" && (
          <Button
            onClick={() => navigate("/")}
            className="header__breadcrumb__item header__breadcrumb__level-1 header__breadcrumb__button"
          >
            Home
          </Button>
        )}
        {page === "hash" && (
          <li className="header__breadcrumb__item header__breadcrumb__level-2">
            <div className="header__breadcrumb__item__content">{title}</div>
          </li>
        )}
      </ul>
    </header>
  );
};

export default Header;
