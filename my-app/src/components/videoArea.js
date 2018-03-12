/*****************************************************************************
Video viewer players renders both video player and the video data area.
*****************************************************************************/

import React from 'react';
import VideoPlayer from './videoPlayer.js';
import VideoFooter from './videoFooter.js';
import '../css/videoArea.css';

const videoAreaClass = "vid-area"

function VideoArea (props) {

    return (
      <section className={videoAreaClass}>

        <VideoPlayer
          video={props.video}
          storage={props.storage}
          onClick={props.onClick} />

        <VideoFooter
          video={props.video} />

      </section>
    );
}

export default VideoArea;
