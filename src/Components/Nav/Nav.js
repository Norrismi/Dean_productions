import React from "react";
import { Link } from "react-router-dom";
import "./StylesNav.css";
import { Navbar, Nav } from "react-bootstrap";

const MainNav = () => {
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
    <nav className="App sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" position='sticky'>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto ">
            {/* <Link to="/features">
              <Nav.Link href="#features">Features</Nav.Link>
            </Link>
            <Link to="/pricing">
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Link> */}
            {/* <NavDropdown title="YEET" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <div className="nav-container">

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
            </div>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  );
};

export default MainNav;
