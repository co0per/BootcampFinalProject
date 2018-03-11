/*****************************************************************************
Video viewer players renders both the viewer and the settings area.
*****************************************************************************/

import React from 'react'
import VideoPlayerViewer from './videoPlayerViewer.js'
import VideoPlayerError from './videoPlayerError.js'
import {
  VideoPlayerSettings,
  repeat,
  autoplay
} from './videoPlayerSettings.js'

const videoViewerWidth = "640";
const videoViewerHeight = "360";
const videoPlayerAreaClass = "video-player-area";
const noPlayerImgClass = "no-video-img";
const noVideoImgSrc = "img/no_video.jpg";
const noVideoImgAlt = "No video has been loaded";

export default class VideoPlayer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      playerError: false,
      errorCode: null,
      autoplay: true,
      loopplay: false
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !(this.state.playerError && !nextState.playerError)
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

  /*If an error occurs on the player a message will be displayed below the
  player's view area */
  handleError(err, player) {

    this.setState({
      playerError: true,
      errorCode: err
    })

  }

  /*When a change is produced on the player, error state is cleared (it will
  be trigerred again if the error happens again.)*/
  handleChange() {
    this.setState({
      playerError: false,
      errorCode: null
    })
  }


  render() {

    let playerPane;

    //If a video is loaded video player is rendered.
    if(this.props.video) {
      playerPane = (
        <VideoPlayerViewer
          video={this.props.video}
          autoplay={this.state.autoplay}
          loopplay={this.state.loopplay}
          defaultHeight={videoViewerHeight}
          defaultWidth={videoViewerWidth}
          onError={this.handleError.bind(this)}
          onChange={this.handleChange.bind(this)}/>
        );
    }
    //Otherwise a no video image is rendered.
    else {
      playerPane = (
        <img
          className={noPlayerImgClass}
          src={noVideoImgSrc}
          alt={noVideoImgAlt} />
        );
    }


    /*If an error is detected on the player an error pane will be displayed on
    top of the player*/
    return (
      <div className={videoPlayerAreaClass}>

        {playerPane}
        {this.state.playerError ? <VideoPlayerError errorCode={this.state.errorCode} /> : null}

        <VideoPlayerSettings
          onChangeCfg={this.handleChangeCfg.bind(this)}/>

      </div>
    )
  }

}
