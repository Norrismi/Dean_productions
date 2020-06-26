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

componentDidMount(){
  window.addEventListener('scroll', () => {
    const isTop = window.scrollY < 30;
    if (isTop !== true){
        this.setState({scrolled: true})
    }else{
      this.setState({scrolled: false})
    }
  })
}

componentWillUnmount(){
  window.removeEventListener('scroll')
}


  render() {
    return (
      
      <div className={this.state.scrolled ? 'nav scrolled' : 'nav'}>
      
      <div className="master-container">
        <div className="logo-container">
          <h3 className="logo">Logo</h3>
        </div>

        <nav className="nav-bar">
          <ul className="links">
            <NavLink
              to="/contact"
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              <li>Contact</li>
            </NavLink>
            <NavLink
              to="/testimonials"
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              <li>Testimonials</li>
            </NavLink>
            <NavLink
              exact
              to="/"
              activeStyle={{
                fontWeight: "bold",
              }}
            >
              <li>Home</li>
            </NavLink>
          </ul>
        </nav>
      </div>
        </div>
    );
  }
}

export default Nav;
