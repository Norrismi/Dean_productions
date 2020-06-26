import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./StylesContact.css";
import api from "../ThirdParty/API";
import Footer from "../Nav/Footer";
import shSax from "../../Assets/shSax.jpg";

let emailRegex = RegExp(/[^@]+@[^.]+\..+/);

//const api = process.env.REACT_APP_ENDPOINT;

class Contact extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    message: "",
    success:'',

    formErrors: {
      email: "",
      phone: "",
      form: [],
    },
  };

  postDataHandler = (e) => {
    e.preventDefault();

    const data = this.state;

    // api.post("/submission.json", data).then(res=>{
    //     console.log(res)
    // })

    this.state.phone && this.state.message
      ? api.post("/submission.json", data).then((res) => {
          console.log(res);
          data.success.push('Your Information was Submitted Thanks!')
          // this.props.history.push("/ContactComplete");
        })
      : // .then(error => {console.log(error)})
        data.formErrors.form.push("Complete the form");

    this.setState({
      name: "",
      phone: "",
      email: "",
      message: "",
      success:[],
    });
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let formErrors = this.state.formErrors;

    switch (name) {
        case "email":
          formErrors.email = emailRegex.test(value)
            ? null
            : "Please enter a valid email address";
          break;

      case "phone":
        formErrors.phone =
          value.length < 7 ? "Minimum 7 characters required" : null;
        break;

        case "success":
          this.state.success[0] =
            value.length ? "Submit Complete" : null;
       

      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    let { formErrors } = this.state;
    return (
      <div>
        <Nav />
        <div className="columns-container">
            <div className="contact-left-side">


              <h3 className="header1">Contact Us...</h3>
              <h3 className="header2">We want to hear from you!</h3>
              <br></br>
              <div className="body">
                Would you need music for a special event or wedding? This is the
                right page for you! Please leave a message describing the event
                and the genre of music you need. We will bend our strings as
                much as possible to meet your needs!
              </div>
              <div className="contact-forms">
                <form id="contact-form" onSubmit={this.postDataHandler}>
                  <div className="form-name">
                    <input
                      type="text"
                      name="name"
                      value={this.state.name}
                      onChange={this.handleChange}
                      placeholder="Fist and Last Name"
                    />
                  </div>
                  <br></br>
                  <div className="form-phone">
                    <input
                      type="tel"
                      name="phone"
                      value={this.state.phone}
                      onChange={this.handleChange}
                      placeholder="Cell Number: 000-000-0000 "
                      required
                    />
                  
                  </div>
                    {formErrors.phone ? <span>{formErrors.phone}</span> : null}
                  <br></br>
                  <div className="form-email">
                    <input
                      type="email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      placeholder="Name@email.com"
                      //aria-describedby="emailHelp"
                    />
                  </div>
                    {formErrors.email ? <span>{formErrors.email}</span> : null}
                  <div className="form-message">
                    <textarea
                      name="message"
                      value={this.state.message}
                      onChange={this.handleChange}
                      placeholder="Message"
                      rows="20"
                    ></textarea>
                  </div>
                  <button type="submit">
                    Submit
                  </button>
                  {console.log(this.state.phone)}
                {!this.state.success ? <span>{this.state.success}</span> : null}


                </form>
                {console.log(this.state.success[0])}
                {/* {this.state.formErrors.form ? <span>{formErrors.form[0]}</span> : null} */}

              </div>
          </div>

          <div className="contact-right-side">
     
            <img src={shSax} className='shSax' alt="Dean St.Hillaire playing Saxophone" />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Contact;
