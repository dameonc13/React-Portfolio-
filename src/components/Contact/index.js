import React from "react";
import "./style.css";
import Images from "../images/Images";

function Contact() {
  return (
    <div id="contact">
      <div className="container">
        <div className="row">
          <div className="col-md-12 ">
            <h2>Contact</h2>
          </div>
        </div>
        <hr />
        <form
          id="contact-form"
          method="POST"
          action="https://formspree.io/xyyjpyzv"
        >
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="md-form">
            <textarea
              type="text"
              id="message"
              name="message"
              rows="2"
              placeholder="Your Message"
              className="form-control md-textarea"
            ></textarea>
          </div>
          <br />
          <button type="submit" className="btn " type="submit">
            <i className="fa fa-paper-plane"></i> SEND MESSAGE
          </button>
          <input type="hidden" name="_next" value="dameonc13.github.io" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
