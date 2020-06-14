import React, { Component } from "react";
import musicPic from "../../Assets/music-stage.jpg";
import "./StylesHome.css";
import Nav from "../Nav/Nav";
import YouTube from "../ThirdParty/YouTube";
import ReactPlayer from "react-player";
import Footer from '../Nav/Footer'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <div className="top-half">
          <img src={musicPic} alt="music stage" />
        </div>
        <div className="nav-bar">
          <Nav />
        </div>
        <div className="parent-container">

        <div className="home-container">
          <div className="left">
            <div className="first-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <br></br>
            <div>
              r adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum
            </div>
            <br></br>
            <div>
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <br></br>
            <div>
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
            <br></br>
            <div>
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </div>
          </div>
        </div>


        <div className="right">
          <div className="video1">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=vYh-Eg7AELg"
            controls={true}
            volume = {0.1}
            height='100%'
            width='100%'
            onSeek={5}
          />

          </div>

          <div className="video2">

             <ReactPlayer
            url="https://www.youtube.com/watch?v=8cNt8ZkRbZ4"
            controls={true}
            volume = {0.1}
            height='100%'
            width='100%'
          />
          </div>
        </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;
