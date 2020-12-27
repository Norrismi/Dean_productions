import React from "react";
import { Link } from "react-router-dom";
import "./StylesNav.css";
import { Navbar, Nav } from "react-bootstrap";

// const MainNav = () => {


//   return (
//     <nav className="App sticky-top">
//       <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" position='sticky'>
//         <Navbar.Brand href="home">Logo</Navbar.Brand>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="mr-auto ">

//           </Nav>
//           <Nav>


//             <Link  to="/">
//               {/* <Nav.Link href="home"> */}
//                 <li>Home</li>
//               {/* </Nav.Link> */}
//             </Link>
//             <Link  to="/testimonials">
//               {/* <Nav.Link href="testimonials"> */}
//                 <li>Testimonials</li>
//               {/* </Nav.Link> */}
//             </Link>
//             <Link  to="/contact">
//               {/* <Nav.Link href="contact"> */}
//                 <li>Contact</li>
//               {/* </Nav.Link> */}
//             </Link>

//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </nav>
//   );
// };

// export default MainNav;



const MainNav = () => {

  return (
    <div className="navbar  navbar-expand-lg navbar-dark bg-dark sticky-top">

      <button className="navbar-toggler" type="button" data-toggle="collapse" 
      data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" 
      aria-expanded="false" aria-label="Toggle navigation"
      
      >


        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        
        <a className="navbar-brand" href="/">Hidden brand</a>
        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/testimonials">Testimonials</a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/contact">Contact</a>
          </li>

        </ul>

      </div>
    </div>
  )

}

export default MainNav