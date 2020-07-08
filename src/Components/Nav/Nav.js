import React from "react";
import { Link } from "react-router-dom";
import "./StylesNav.css";
import { Navbar, Nav } from "react-bootstrap";

const MainNav = () => {


  return (
    <nav className="App sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" position='sticky'>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ">

          </Nav>
          <Nav>
         

            <Link exact to="/">
              <Nav.Link href="#home">
                <li>Home</li>
              </Nav.Link>
            </Link>
            <Link exact to="/testimonials">
              <Nav.Link href="#testimonials">
                <li>Testimonials</li>
              </Nav.Link>
            </Link>
            <Link exact to="/contact">
              <Nav.Link href="#contact">
                <li>Contact</li>
              </Nav.Link>
            </Link>
       
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default MainNav;
