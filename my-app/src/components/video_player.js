/*****************************************************************************
Video viewer players renders both the viewer and the settings area.
*****************************************************************************/

import React from 'react'
import VideoPlayerViewer from './video_player_viewer.js'
import VideoPlayerSettings from './video_player_settings.js'

const noVideoImgURL = "img/no_video_loaded.jpg"

export default class VideoPlayer extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>

        {this.props.videoId ?
          <VideoPlayerViewer
            title={this.props.title}
            videoId={this.props.videoId}
            defaultHeight={this.props.defaultHeight}
            defaultWidth={this.props.defaultWidth} /> :
          <img
            src={noVideoImgURL}
            alt="No video has been loaded..."
            height={this.props.defaultHeight}
            width={this.props.defaultWidth}
          />}

        <VideoPlayerSettings />

      </div>
    )
  }

}
