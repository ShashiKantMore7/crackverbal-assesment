import React from "react";
import "./about.css";
import about from "../../image/about.jpg";
import { FcSlrBackSide, FcWorkflow, FcShop } from "react-icons/fc";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade left>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img src={about} alt="about_image" height="400px" width="400px" />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-details">
              <div className="section_title">
                <h5>About</h5>
                <span className="line"></span>
              </div>
              <p>
                Crackverbal is composed of diverse team members who are united
                by the mission to build a world-class test-prep and admissions
                company to help students make smarter career choices
              </p>
              <p>
                {" "}
                From GMAT Preparation to MBA Admission Consulting, Crackverbal
                has you covered
                <br />
                <h4>What You Will Recieve With Trial</h4>
              </p>
              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcSlrBackSide size={50} />
                    </p>
                  </div>
                  <div>
                    <h6>Overview of The "OLP" Strategy</h6>
                    <p>
                      Optimised learning path where we share step by step plan
                      to ckrack the 700+ GMAT score
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcWorkflow size={50} />
                    </p>
                  </div>
                  <div>
                    <h6>APS Techniques</h6>
                    <p>
                      Real-Time Application Examples of "APS Techniques" -
                      Approach + pattern + Strategy
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-design">
                <div className="about-list-item">
                  <div className="about-details-icon">
                    <p>
                      <FcShop size={50} />
                    </p>
                  </div>
                  <div>
                    <h6>Downloadable Resources </h6>
                    <p>
                      Downloadeble resources & cheatsheet + playbooks to
                      accelerate your GMAT preparation learning curve
                    </p>
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
