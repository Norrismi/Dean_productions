import React from "react";
import "./StylesFooter.css";

import { SocialIcon } from "react-social-icons";

const Footer = () => {
  let today = new Date();
  let currentYear = today.getFullYear();

  return (
    <div>
        <div className="social-media-parent">
          <div className="facebook-icon">
            <SocialIcon url="https://www.facebook.com/dean.sthillaire" target="_blank" />
          </div>
          <div className="youTube-icon">
            <SocialIcon url="https://www.youtube.com/user/dean26mason" target="_blank" />
          </div>
        </div>

      <div className="footer-container">
          <div className="footer-legal-one">{`©${currentYear} St. Hillaire Productions, LLC`}</div>
            <div className="footer-legal-two">All Rights Reserved</div>
      
      </div>



    </div>
  );
};

export default Footer;
