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
        <h2 className="testimonials-header">Kind Words from Our Listeners</h2>
        <div className="comments">
          <div id="highlight">
            <em>"Great Vocials!"</em>
          </div>
          <div id="comment">
            "In eget velit vel felis interdum euismod vitae quis justo. Nam
            congue porttitor aliquam. Nullam nisl dolor, vehicula at commodo
            eget, hendrerit id ante. Fusce sit amet sodales dolor, a egestas
            lorem. Morbi tempor neque elementum ornare pulvinar. Duis et posuere
            nibh. Suspendisse ullamcorper cursus nulla, non egestas erat
            sagittis sit amet. Aliquam sed posuere sem. Proin faucibus posuere
            tempus."
          </div>

          <div id="socialComment">
          <img src={fbComment1} alt="social media comment 1" />
          </div>


          <div id="highlight">
            <em>"Man of great talent"</em>
          </div>
          <div id="comment">
            "Nunc eros tortor, elementum at commodo ac, vulputate vehicula mi.
            Proin et bibendum nunc. Aenean aliquam leo tortor, sit amet interdum
            augue volutpat ac. Phasellus varius nec metus vel porta. Mauris id
            nulla diam. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Mauris mattis dui aliquam ornare
            pellentesque. Sed congue rhoncus elementum."
          </div>

          <div id="socialComment">
          <img src={fbComment} alt="social media comment" />
          </div>


          <div id="highlight">
            <em>"Made for a great night of music"</em>
          </div>
          <div id="comment">
            "Proin metus mauris, malesuada nec purus dignissim, porttitor
            placerat lectus. Integer hendrerit lacinia ligula sit amet
            condimentum. Quisque ullamcorper tristique eleifend. Suspendisse
            malesuada gravida justo, posuere ultricies libero. Nullam lobortis
            interdum elementum. Curabitur consequat vulputate mi, pharetra
            blandit ex cursus sit amet. Sed placerat eros ac orci ullamcorper
            iaculis."
          </div>

          <div id="socialComment">
          <img src={fbComment3} alt="social media comment 3" />
          </div>






          <div id="highlight">
            <em>
              "Would love to be back ocean side listening to Dean's music"
            </em>
          </div>
          <div id="comment">
            "Nam vehicula libero et blandit venenatis. Morbi non magna varius,
            scelerisque mauris id, laoreet lectus. Nunc turpis odio, imperdiet
            et magna vitae, accumsan vestibulum felis. Donec vehicula orci eget
            varius lacinia. Integer aliquam erat a venenatis varius. Donec
            rhoncus enim lacus, sit amet condimentum quam ornare ut. Aenean
            malesuada gravida congue. Vestibulum egestas felis vel neque lacinia
            mattis. Cras pharetra ipsum vitae tellus porttitor accumsan.""
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
