/*****************************************************************************
Video viewer players renders both video player and the video data area.
*****************************************************************************/

import React from 'react'
import VideoPlayer from './videoPlayer.js'
import VideoFooter from './videoFooter.js'

export default class VideoArea extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>

        <VideoPlayer
          video={this.props.video}
          defaultHeight={this.props.defaultHeight}
          defaultWidth={this.props.defaultWidth} />

        <VideoFooter
          video={this.props.video} />

      </section>
    )
  }
}
