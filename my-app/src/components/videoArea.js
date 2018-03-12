/*****************************************************************************
Video viewer players renders both video player and the video data area.
*****************************************************************************/

import React from 'react';
import VideoPlayer from './videoPlayer.js';
import VideoFooter from './videoFooter.js';
import '../css/videoArea.css';

const videoAreaClass = "vidArea"

function VideoArea (props) {


    return (
      <section className={videoAreaClass}>

        <VideoPlayer
          video={props.video} />

        <VideoFooter
          video={props.video} />

      </section>
    );
}

export default VideoArea;