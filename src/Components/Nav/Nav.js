import React from "react";
import { NavLink } from "react-router-dom";
import "./StylesNav.css";

const Nav = () => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     scrolled: false,
  //   };
  // }

  // componentDidMount() {
  //   window.addEventListener("scroll", () => {
  //     const isTop = window.scrollY < 5;
  //     if (isTop !== true) {
  //       this.setState({ scrolled: true });
  //     } else {
  //       this.setState({ scrolled: false });
  //     }
  //   });
  // }

  // // componentWillUnmount(){
  // //   window.removeEventListener('scroll')
  // // }


    return (
      <nav className="navbar sticky-top  navbar-expand-lg navbar-dark bg-dark">
        <div className="navbar-brand">Logo</div>
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
                color: '#F0EBC5',
              }}
            >
              <li>Home</li>
            </NavLink>
            <NavLink
              to="/testimonials"
              className="nav-item active"
              activeStyle={{
                fontWeight: "bold",
                color: '#F0EBC5',
              }}
            >
              <li>Testimonials</li>
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-item active"
              activeStyle={{
                fontWeight: "bold",
                color: '#F0EBC5',
              }}
            >
              <li>Contact</li>
            </NavLink>
          </ul>
        </div>
      </nav>
    );
  
            }

export default Nav;
