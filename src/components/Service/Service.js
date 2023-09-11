import React from "react";
import "./service.css";
import Zoom from "react-reveal/Zoom";

const Service = () => {
  const servicedata = [
    {
      name: "CONNECT",
      service1:
        "Our Coaches will help you create a plan and help you with a highly effective learning path that’s unique to your goals and Target GMAT Score"
    },
    {
      name: "CONSUME",
      service1:
        "Concepts, Sessions, and More - Depending on the path that's best for you, you begin your learning journey through our “Learn Paths” optimised for scoring and success"
    },
    {
      name: "CLARIFY",
      service1:
        "Confidently clarify concepts and deep-dive into harder questions with our coaches. For On-Demand Prep, you can buy credits to gain personal access to Coaches too"
    }
  ];

  return (
    <div className="container service-section" id="service">
      {/* Section title */}

      <div className="section_title">
        <h5>Services</h5>
        <span className="line"></span>
        <br />
        <h5>We Help You Accelerate Your GMAT Prep in 3 Ways </h5>
      </div>
      <div className="row">
        {servicedata.map((item, index) => (
          <Zoom top>
            <div className="col-sm" key={index}>
              <div className="services">
                <span className="service-name">
                  <h6>{item.name}</h6>
                </span>

                <div className="list-of-service">
                  <p>{item.service1}</p>
                </div>
              </div>
            </div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Service;
