import React, { Component } from "react";
import ReactPlayer from 'react-player'

class ResponsivePlayer extends Component {
  render () {

    const {url} = this.props
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url = {url}
          // controls= "true"
          // width='25%'
          // height='25%'
        />
      </div>
    )
  }
}

export default ResponsivePlayer;





// import "react-youtube";

// // share link: https://youtu.be/8cNt8ZkRbZ4
// // ?v=8cNt8ZkRbZ4
// // 8cNt8ZkRbZ4

// class YouTube extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }
//   // videoOnReady(event) {
//   //   // access to player in all event handlers via event.target
//   //   event.target.pauseVideo();
//   // }
//   render() {
//     const opts = {
//       height: "390",
//       width: "640",
//       // playerVars: {
//       //   // https://developers.google.com/youtube/player_parameters
//       //   autoplay: 0,
//       // },
//     };

//     const { videoId } = this.props;
//     return (
//       <YouTube 
//       videoId={videoId} 
//       opts={opts} 
//       //onReady={this.videoOnReady} 
//       />
//     );
//   }
// }
// export default YouTube;
