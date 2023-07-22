import React from "react";
import "./Individuals.css";
import Terminal from "../../assets/cards.jpg";

const Individuals = () => {
  return (
    <div className="developers">
      <div className="container">
        <div className="left">
          <h2 className="ora"> CARDS FOR ANY TYPE OF PERSON</h2>
          <p>
            Card <span className="blue">transactions </span>, are{" "}
            <span className="blue">reflected</span> on the account in that
            currency, in which the transaction was performed, regardless of the
            currency the user had chosen as a priority
          </p>
        </div>
        <div className="right">
          <div className="img-container">
            <img src={Terminal} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Individuals;
