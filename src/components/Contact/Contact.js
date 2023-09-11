import React from "react";
import { IoIosSend } from "react-icons/io";

import "./contact.css";



const Contact = () => {
  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
          <div className="image-class">
            <img
              src="https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12">
          <div className="contact-form-design">
            <div className="text-center">
              <h5>Contact Form</h5>
            </div>
            <form>
              <div className="contact-form">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>
              <div className="contact-form">
                <label className="form-label">E-mail</label>
                <input type="text" className="form-control" />
              </div>
              <div className="contact-form">
                <label className="form-label">Service you need</label>
                <select className="custom-select">
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>UI/UX Design</option>
                  <option>Digital Marketing</option>
                </select>
              </div>
              <div className="contact-form">
                <label className="form-label">Your Message</label>
                <textarea
                  type="text"
                  rows="4"
                  maxLength="500"
                  className="form-control"
                />
              </div>
              <div className="button-submit">
                <p>Send <IoIosSend size={20}/></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
