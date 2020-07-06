import React from "react";
import brokenPiano from "../../Assets/broken-piano.jpg";
import "./Styles.css";
import Nav from "../Nav/Nav";
import Footer from "../Nav/Footer";

const NotFound = () => {
  return (
    <div className="parent404">
      <Nav />
      <div className="pianoTextContainer">
        <img className="piano" src={brokenPiano} alt="music stage" />

        <div className="firstComment">We have a problem</div>
        <div className="secondComment">404 Error, Page Not Found</div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
