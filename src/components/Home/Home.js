import React from "react";
import "./home.css";
import about from "../../image/about.jpg";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";

const Home = ({ theme, handleChangeTeam }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={() => handleChangeTeam()}>
        {theme === "light" ? (
          <p>
            <BsMoonStarsFill size={40} />
          </p>
        ) : (
          <p>
            <BsFillSunFill size={40} color={"white"} />
          </p>
        )}
      </div>
      <Fade left>
        <div className="container home-title">
          <p>
            <img src={about} alt="about_image" height="65px" width="55px" />
          </p>
          <h1>crackverbal</h1>
        </div>
        <div className="container home-content">
          <h1>
            <Typewriter
              options={{
                strings: [
                  "Crack The GMAT",
                  "With Live Preparation",
                  "Online Course 2023"
                ],
                autoStart: true,
                loop: true,
                delay: 5
              }}
            />
          </h1>
          <h4>
            Access <b>FREE</b> Trial Where We Reveal Effective Techniques To
            Crack The <b>700+ GMAT Score</b> in 60 Days
          </h4>
          <h5>
            Click Below to Get Instant Free Trial Access On How to Crack The{" "}
            <b>GMAT Within 60 Days</b>.
          </h5>
          <span className="view-details-home-button">Access Trial Course</span>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
