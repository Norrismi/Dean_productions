import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Nav/Footer";
import "./Testimonials.css";

import {fbComment, fbComment1,  fbComment3, fbComment4} from '../../Assets/Main'

function testimonials(params) {
  return (
    <div className="testimonials-container">
      <Nav />
      <div>
        <div className="headerContainer">

        <h2 className="testimonials-header">Kind Words from Our Fellow Partyers</h2>
        </div>
        <div className="comments">
          <div id="highlight">
            <em>"Heard his music at the Jazz Corner"</em>
          </div>
          <div id="comment">
            "I attempt to make it to the Jazz Corner multiple times per year. I know Dean has been a regular playing at the Jazz Corner, but I just wanted to write and comment how much I 
            enjoy his plaing that the Jazz Corner. Jazz is some of my favorite music and I truly enjoy Dean's take on Jazz!"
          </div>

          <div id="socialComment">
          <img src={fbComment1} alt="social media comment 1" />
          </div>


          <div id="highlight">
            <em>"Great poolside music near Sea Salts"</em>
          </div>
          <div id="comment">
            "We recently had a great vacation and one of the top highlights was relaxing down at the pool and enjoying 
            the tropical Ragee Music Dean was playing. It was the perfect touch to sit back and enjoy poolside!"
          </div>

          <div id="socialComment">
          <img src={fbComment} alt="social media comment" />
          </div>


          <div id="highlight">
            <em>"Like an Extension of my Vacation"</em>
          </div>
          <div id="comment">
            "We loved Dean's music at the Barony Vacation Club! I would highly suggest everyone to look up the days he is playing and to go take in some of his great music!"
          </div>

          <div id="socialComment">
          <img src={fbComment3} alt="social media comment 3" />
          </div>


          <div id="highlight">
            <em>
              "Hired Dean for Daughter's Wedding"
            </em>
          </div>
          <div id="comment">
            "We recently hired Dean to play at my Daughter's wedding. We were beyond the moon with his professional approach and his excellent musical selection!"
          </div>

          <div id="socialComment">
          <img src={fbComment4} alt="social media comment 4" />
          </div>


        </div>
      </div>
      <Footer />
    </div>
  );
}

export default testimonials;
