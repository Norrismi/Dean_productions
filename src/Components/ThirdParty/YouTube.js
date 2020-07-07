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
        />
      </div>
    )
  }
}

export default ResponsivePlayer;






