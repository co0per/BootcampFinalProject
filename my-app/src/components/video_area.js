/*****************************************************************************
Video viewer players renders both video player and the video data area.
*****************************************************************************/

import React from 'react'
import VideoPlayer from './video_player.js'
import VideoFooter from './video_footer.js'

export default class VideoArea extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <section>

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
