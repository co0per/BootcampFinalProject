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

const videoViewerWidth = "640";
const videoViewerHeight = "360";
const videoPlayerClass = "video-player";
const noPlayerImgClass = "no-video-img";
const noVideoImgSrc = "img/no_video.jpg";
const noVideoImgAlt = "No video has been loaded";
const videoError = {
  '2': "Bad video ID.",
  '5': "Can't play this video on HTML5 player.",
  '100': "The requested video is no longer available.",
  '101': "The requested video can't be played on this player.",
  '150': "The requested video can't be played on this player.",
  unknown: "An unknown error has been produced."
}

export default class VideoPlayer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      playerError: false,
      errorMsg: null,
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


  /*If an error occurs on the player a message will be displayed below the
  player's view area */
  handleError(err) {
    let errMsg;

    //Determines the cause of the error.
    switch (err) {
      case 2:
        errMsg = videoError.badID;
        break;
      case 5:
        errMsg = videoError.htmlError;
        break;
      case 100:
        errMsg = videoError.notAvailable;
        break;
      case 101:
      case 150:
        errMsg = videoError.cantPlay;
        break;
      default:
        errMsg = videoError.unknown;
        break;
    }

    this.setState({
      playerError: true,
      errorMsg: errMsg
    })

  }

  /*When a change is produced on the player, error state is cleared (it will
  be trigerred again if an error occurs again.)*/
  handleChange() {
    this.setState({
      playerError: false,
      errMsg: null
    })
  }


  render() {

    return (
      <div className={videoPlayerClass}>

        {this.props.video && !this.state.playerError?
          <VideoPlayerViewer
            video={this.props.video}
            autoplay={this.state.autoplay}
            loopplay={this.state.loopplay}
            defaultHeight={videoViewerHeight}
            defaultWidth={videoViewerWidth}
            onError={this.handleError.bind(this)}
            onChange={this.handleChange.bind(this)}/>
          :
          <img
            className={noPlayerImgClass}
            src={noVideoImgSrc}
            alt={noVideoImgAlt} />}

        {this.state.playerError ?
          <p> {this.state.errorMsg} </p>
          :
          null
        }

        <VideoPlayerSettings
          onChangeCfg={this.handleChangeCfg.bind(this)}/>

      </div>
    )
  }

}
