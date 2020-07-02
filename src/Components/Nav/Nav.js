import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./StylesNav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY < 5;
      if (isTop !== true) {
        this.setState({ scrolled: true });
      } else {
        this.setState({ scrolled: false });
      }
    });
  }

  // componentWillUnmount(){
  //   window.removeEventListener('scroll')
  // }

  render() {
    return (
      <nav className="navbar navbar sticky-top navbar-light bg-light navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand">Logo</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            {/* <li className="nav-item active"> */}
            <NavLink
              exact
              to="/"
              className="nav-item active"
              activeStyle={{
                fontWeight: "bold",
                color: "white",
              }}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/testimonials"
              className="nav-item active"
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              <li>Testimonials</li>
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-item active"
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
