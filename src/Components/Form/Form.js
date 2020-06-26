import React, { Component } from "react";
import api from "../ThirdParty/API";

let emailRegex = RegExp(/[^@]+@[^.]+\..+/);

class Form extends Component {
  state = {
    name: "",
    phone: "",
    email: "",
    message: "",
  

    formErrors: {
      email: "",
      phone: "",
      form: [],
    },
  };

  postDataHandler = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);

    const data = this.state;

    data.phone && data.message
      ? api.post("/submission.json", data)
      : this.setState({
          name: "",
          phone: "",
          email: "",
          message: "",
          success: [],
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

      default:
        break;
    }
    this.setState({ formErrors, [name]: value });
  };

  render() {
    let { formErrors } = this.state;
    return (
      <div>
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
                aria-describedby="emailHelp"
                required
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
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Form;
