import React from "react";
import "./StylesNav.css";
import sax_logo from '../../Assets/sax_logo.png'


const MainNav = () => {

  return (
    <div className="navbar  navbar-expand-lg navbar-dark bg-dark sticky-top">

      <button className="navbar-toggler" type="button" data-toggle="collapse" 
      data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" 
      aria-expanded="false" aria-label="Toggle navigation"
      
      >


        <span className="navbar-toggler-icon"></span>
      </button>
        <a className="navbar-brand" href="/">
          <img className=" nav-bar_logo" src={sax_logo} alt='site logo and alternative home button'/>
        
        </a>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        
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