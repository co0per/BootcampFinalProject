/*****************************************************************************
Video viewer players renders both video player and the video data area.
*****************************************************************************/

import React from 'react'
import VideoPlayer from './videoPlayer.js'
import VideoFooter from './videoFooter.js'
import '../css/videoArea.css'

export default class VideoArea extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section className="vidarea">

        <VideoPlayer
          title={this.props.title}
          videoId={this.props.videoId}
          defaultHeight={this.props.defaultHeight}
          defaultWidth={this.props.defaultWidth} />

        <VideoFooter
          title={this.props.title}
          description={this.props.description} />

      </section>
    )
  }
}
