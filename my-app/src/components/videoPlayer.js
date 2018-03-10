/*****************************************************************************
Video viewer players renders both the viewer and the settings area.
*****************************************************************************/

import React from 'react'
import VideoPlayerViewer from './videoPlayerViewer.js'
import {
  VideoPlayerSettings,
  repeat,
  autoplay
} from './videoPlayerSettings.js'

export default class VideoPlayer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      autoplay: true,
      loopplay: false
    }
  }

  handleChangeCfg(target, value) {
    switch (target) {
      case repeat:
        this.setState({
          loopplay: !this.state.loopplay
        })
        break;
      case autoplay:
        this.setState({
          autoplay: !this.state.autoplay
        })
        break;
      default:
        break;
    }
  }


  render() {

    return (
      <div>

        <VideoPlayerViewer
          video={this.props.video}
          autoplay={this.state.autoplay}
          loopplay={this.state.loopplay}
          defaultHeight={this.props.defaultHeight}
          defaultWidth={this.props.defaultWidth} />

        <VideoPlayerSettings
          onChangeCfg={this.handleChangeCfg.bind(this)}/>

      </div>
    )
  }

}
