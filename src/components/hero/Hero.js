import React from "react";
import MainVideo from "../../assets/planet_-_71428 (Original).mp4";
import "./Hero.css";

const hero = () => {
  return (
    <div className="hero">
      <video autoPlay loop muted id="video">
        <source src={MainVideo} type="video/mp4" />
      </video>
      <div className="hero-text">
        <h1>Special</h1>
        <h1>
          <span className="orange1">Offers </span> For Everyone
        </h1>
        <p>NOW ALL DEPOSITS ARE OPENED IN CREDOBANK</p>

        <div className="btn-group">
          {/* <button className="btn btn-outline">Documentation</button> */}
          <a href="https://credobank.ge/en/contact/">
            <button className="btn btn-outline">FAQ</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default hero;
