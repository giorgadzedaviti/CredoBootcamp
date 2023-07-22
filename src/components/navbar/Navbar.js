import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";
import credo from "../../assets/CREDO BANK.png";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <a href="https://credobank.ge/en/">
          <img style={{ marginLeft: "-3rem" }} src={credo} alt="" />
        </a>
        <ul className={click ? "nav active" : "nav"}>
          <li className="nav-item">
            <a href="https://credobank.ge/en/mission/">ABOUT CREDO</a>
          </li>
          <li className="nav-item">
            <a href="https://credobank.ge/en/loans/">INDIVIDUALS</a>
          </li>
          <li className="nav-item">
            <a href="https://credobank.ge/en/products/business-loan/">
              BUSINESS
            </a>
          </li>
          <li className="nav-item">
            <a href="https://credobank.ge/en/favorite/">CREDO RCHEULI</a>
          </li>
          <li className="nav-item">
            <a className="btn" href="https://mycredo.ge/landing/main/auth">
              INTERNET BANKING
            </a>
          </li>
        </ul>
        <div onClick={handleClick} className="hamburger">
          {click ? (
            <AiOutlineClose className="icon" />
          ) : (
            <AiOutlineMenu className="icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
