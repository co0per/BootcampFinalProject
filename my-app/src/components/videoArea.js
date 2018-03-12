/*****************************************************************************
Video viewer players renders both video player and the video data area.
*****************************************************************************/

import React from 'react';
import VideoPlayer from './videoPlayer.js';
import VideoFooter from './videoFooter.js';
import '../css/videoArea.css';

const videoAreaClass = "vid-area"

export default class VideoArea extends React.Component {

  render() {
    return (
      <section className={videoAreaClass}>

        <VideoPlayer
          video={this.props.video} />

        <VideoFooter
          video={this.props.video} />

      </section>
    )
  }
}
