import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./StylesContact.css";
import Footer from "../Nav/Footer";
import shSax from "../../Assets/shSax.jpg";
import ServerForm from "../Form/ServerForm";

class Contact extends Component {
  state = {
    fields: "",
  };

  onSubmit = (fields) => {
    this.setState({ fields });
  };

  render() {
    console.log(this.state.fields);

    return (
      <div>
        <Nav />
        <div className="contact_columns-container">
          <div className="contact_left-side">
            <h3 className="header1">Contact Us...</h3>
            <h3 className="header2">We want to hear from you!</h3>
            <br></br>
            <div className="contact_body">
              Would you need music for a special event or wedding? This is the
              right page for you! Please leave a message describing the event
              and the genre of music you need. We will bend our strings as much
              as possible to meet your needs!
            </div>

            <span className='contactForm'>
              {!this.state.fields ? (
                <ServerForm onSubmit={(fields) => this.onSubmit(fields)} />
              ) : null}
            </span>

            {this.state.fields ? (
              <div className="successContainer">
                <p className="submitSuccess">
                  Thank you, your message has been submitted!
                </p>
              </div>
            ) : null}

            <div className="contact_mobile-picture">
              <img
                src={shSax}
                className="contact_dean-sax-img"
                alt="Dean St.Hillaire playing Saxophone"
              />
            </div>

          </div>

          <div className="contact_right-side">
            <img
              src={shSax}
              className="contact_right-side-shSax"
              alt="Dean St.Hillaire playing Saxophone"
            />
          </div>
        </div>

        <Footer />
      </div>

    );
  }
}

export default Contact;
