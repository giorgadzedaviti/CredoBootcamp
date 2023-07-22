import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="col">
          <a href="/">© 2023 CREDO BANK</a>
        </div>
        <div className="col">
          <a href="https://credobank.ge/en/how-to-use-banking-services/">
            HOW TO USE BANKING SERVICES
          </a>
        </div>
        <div className="col">
          <a href="https://credobank.ge/en/protection/">CUSTOMER PROTECTION</a>
        </div>
        <div className="col">
          <a href="https://credobank.ge/en/conditions/">TERMS AND CONDITIONS</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
