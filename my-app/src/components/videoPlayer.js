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
import VideoPlayerErrorPane from './videoPlayerErrorPane.js'

const videoViewerWidth = "100%";
const videoViewerHeight = "360px";
const videoPlayerAreaClass = "video-player-area";
const iframeWrapperClass = "iframe-wrapper";
const noPlayerImgClass = "no-video-img";
const noVideoImgSrc = "img/no_video.jpg";
const noVideoImgAlt = "No video has been loaded";

export default class VideoPlayer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      playerError: false,
      playerErrorCode: null,
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

  /*According to react doc: This method is invoked before a mounted component
  receives new props and should be used if state should change when this props
  are received. Thats what we do here when a new video is received the error
  state is reset*/
  componentWillReceiveProps(nextProps) {
    this.setState({
      playerError: false,
      playerErrorCode: null
    })
  }

  handleError(errCode) {
    this.setState({
      playerError:true,
      playerErrorCode: errCode
    })
  }

  render() {

    /*If an error is detected on the player an error pane will be displayed on
    top of the player, if no video is loaded a no video img will be displayed*/
    return (
      <div className={videoPlayerAreaClass}>

        <div className={iframeWrapperClass}>

          <VideoPlayerViewer
            video={this.props.video}
            autoplay={this.state.autoplay}
            loopplay={this.state.loopplay}
            defaultHeight={videoViewerHeight}
            defaultWidth={videoViewerWidth}
            onError={this.handleError.bind(this)}/>

          {!this.props.video ?
            <img
              className={noPlayerImgClass}
              src={noVideoImgSrc}
              alt={noVideoImgAlt} /> : null}

          {this.state.playerError ?
            <VideoPlayerErrorPane
              errorCode={this.state.playerErrorCode}/> : null}

        </div>

        <VideoPlayerSettings
          onChangeCfg={this.handleChangeCfg.bind(this)}/>

      </div>
    )
  }

}
