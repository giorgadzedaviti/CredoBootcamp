import React from "react";
import "./About.css";
import { SiHiveBlockchain, SiStrapi, SiFsecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <h2>MISSION AND VALUES</h2>
        <p>
          CREDO BANK'S MISSION IS TO SUPPORT GEORGIA'S MICRO, SMALL AND MEDIUM
          ENTREPRENEURS AND THEIR EMPLOYEES TO CREATE A BETTER FUTURE BY
          OFFERING AFFORDABLE FINANCIAL SERVICES
        </p>
        <div className="card-container">
          <div className="card">
            <AboutCard
              icon={<SiHiveBlockchain className="icon" />}
              heading="Core value"
              text="Our Core Value is to strengthen the sense of common understanding and bond at Credo."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<SiStrapi className="icon" />}
              heading="Shareholders"
              text="Credo Bank is a multilateral financial institution whose owner is a consortium of social impact investors."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<SiFsecure className="icon" />}
              heading="Deposits"
              text="Save up money safely and simply for investing in your aspirations, upon making desirable contributions and harvesting high profit."
            />
          </div>
          <div className="card">
            <AboutCard
              icon={<VscServerProcess className="icon" />}
              heading="Business loan"
              text="CREDO Bank offers you a business loan with the terms and conditions specially adjusted to you and the flexible payment schedule!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
