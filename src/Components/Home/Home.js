import React, { Component } from "react";
// import musicPic from "../../Assets/music-stage.jpg";
// import ReactPlayer from "react-player";
import "./StylesHome.css";
import Nav from "../Nav/Nav";
import YouTubeVideos from '../ThirdParty/YouTubeVideos'
import Footer from "../Nav/Footer";
import FooterContact from '../Nav/FooterContact'


class Home extends Component {


  render() {

    return (
      <div className="home_main-container">
        <Nav />
        <div className="top-half">
          <h2 className='home_page-title'>St. Hillaire Production</h2>

          <div className='home_location-contact'>
            <h5 className='home_location-contact-title'>Music for any Occasion</h5>
            <FooterContact />
            <button className='home_contact-btn btn btn-link' onClick={() => { this.props.history.push('/contact') }}> Contact Now </button>
          </div>

        </div>


        <div className="parent-container">
          <div className="home-container">
            <div className="left">
              <div>
              Here at Dean Productions we can meet your music event needs, whether you require music for a wedding, a company outing or a birthday party we are here for you! We can play it all and we specialize in Jazz and Island Reggae music.
              </div>
              <br></br>
              <div>
              Growing up in the Caribbean island of Grenada, music was in my soul at an early age. 
              I am sure you can imagine all of the musical celebrations that occur in most carribean islands. 
              Your assessment is correct. It seemed like for every event there was music to bring the celebration alive! With these musical celebrations being a catalyst, I started to dabble in music, soon to find that I had a natural musical gift. I started with the guitar and piano, but then quickly gravitated towards woodwind instruments. After playing the saxophone for the first time, I fell in love. I knew this was the instrument that I wanted to focus on, because it really brought life to the party! 
              </div>
              <br></br>
              <div>
              Moving forward a few years, I found myself playing music on cruise ships. Sailing from different ports in the U.S. to several Caribbean islands. This was a great experience and helped to create a solid musical foundation for my future. After playing on cruise ships for 7 years, I felt the need to move on. 
              </div>
              <br></br>
              <div>
              From here I moved on to Virginia, but I couldn’t let my music go. Having a strong religious spirit, I found myself frequently playing music in church. This allowed me to keep on practicing music and helped me to expand and discover different musical genres.
              </div>
              <br></br>
              <div>
              Moving full circle, now I run a small production company with my friends. We love to entertain and keep the music flowing all night! Please contact us now to bring music to your next event!
              </div>
    
            </div>
          </div>

          <div className="right">

            <div className='cellViewParagraph'>
            Here at Dean Productions we can meet your music event needs, whether you require music for a wedding, a company outing or a birthday party we are here for you! 
            We can play it all and we specialize in Jazz and Island Reggae music.
            We love to entertain and keep the music flowing all night! 
            Please contact us now to bring music to your next event!

            </div>
            <YouTubeVideos />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
