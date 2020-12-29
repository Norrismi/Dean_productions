import React from "react";
import brokenPiano from "../../Assets/broken-piano.jpg";
import "./Styles.css";
import Nav from "../Nav/Nav";
import Footer from "../Nav/Footer";

const NotFound = () => {
  return (
    <div className="NotFound_parent404">
      <Nav />
      <div className="NotFound_pianoTextContainer">
          <img className="NotFound_piano" src={brokenPiano} alt="music stage" />
     
          <h3 className="NotFound_firstComment">We have a problem</h3>
          <h2 className="NotFound_secondComment">404 Error, Page Not Found</h2>
  
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
