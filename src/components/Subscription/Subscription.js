import React from "react";
import Fade from "react-reveal/Fade";
import "./subscription.css";
import { IoIosSend } from "react-icons/io";

const Subscription = () => {
  return (
    <div className="container-fluid subscription" id="subscription">
      <div className="container">
        <div className="row">
          <Fade left>
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
              <div className="subscription_title">
                <h5>
                  Subscribe To Our Newsletter Where We Share Weekly Insights On
                  All Things Career
                </h5>
                <h4>& GET A FREE EBOOK IN YOUR MAIL </h4>
              </div>
              <div className="subscription-form">
                <input type="text" placeholder="Your E-mail" />
              </div>
              <div className="subscription_button">
                <p>
                  subscription <IoIosSend size={20} />
                </p>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
