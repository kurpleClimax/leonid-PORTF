import React from "react";
import "./CSS/Contact.css";
// import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";
import { Row, Col } from "react-bootstrap";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqkwlgye");
  if (state.succeeded) {
    return <p className="feedback">Thank you! I will contact you soon</p>;
  }
 
  return (
    <div id="contact" className="contact">
      <div className="skill-title">
        <Fade top>
          <h2 className="t-color">Contact</h2>
        </Fade>
        <Fade left>
          <span className="bottom-line"></span>
        </Fade>
      </div>
      <div className="form-group">
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="name" className="contact-input">
              Name
            </label>
            <br />
            <input name="name" id="name" type="text"  className="input-field"
            />
            <ValidationError
              prefix="Name"
              field="name"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="email" className="contact-input">
              Email
            </label>
            <br />
            <input
              name="email"
              id="email"
              type="email"
              className="input-field"
            />
             <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label htmlFor="message" className="contact-input">
              Message
            </label>
            <br />
            <textarea
              name="message"
              id="message"
              type="textarea"
              className="input-field message"
            />
             <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <br />
          <input type="submit" className="contact-button" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
