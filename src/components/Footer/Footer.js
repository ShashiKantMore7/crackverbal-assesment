import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import Zoom from "react-reveal/Zoom";

import "./footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="container">
        <Zoom>
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="footer-about-section">
                <h6 style={{ color: "white", marginTop: "20px" }}>About</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
                  animi cupiditate odit possimus facilis dicta suscipit quae
                  cumque eligendi! Aut culpa ex commodi fugit. Libero aut quae
                  vitae, eum sit ducimus totam non obcaecati earum quos illum
                  quam inventore aliquam.
                </p>
                <span className="footer-social-icons">
                  <p>
                    <FaFacebookSquare size={30} />
                  </p>
                  <p>
                    <FaTwitterSquare size={30} />
                  </p>
                  <p>
                    <FaInstagramSquare size={30} />
                  </p>
                  <p>
                    <BsLinkedin size={30} />
                  </p>
                </span>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="footer-service">
                <h6 style={{ color: "white", marginTop: "20px" }}>Services</h6>
                <div className="footer-item">
                  <li>Product Sort</li>
                  <li>Media Marketing</li>
                  <li>Innovation</li>
                  <li>Technology</li>
                  <li>Environment</li>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12">
              <div className="footer-service">
                <h6 style={{ color: "white", marginTop: "20px" }}>
                  Customer area
                </h6>
                <div className="footer-item">
                  <li>Login</li>
                  <li>My Account</li>
                  <li>Wish List</li>
                  <li>FAQ</li>
                  <li>Contact Us</li>
                </div>
              </div>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Footer;
