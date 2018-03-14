/*****************************************************************************
Video viewer players renders both the viewer and the settings area.
*****************************************************************************/

import React from 'react';
import VideoPlayerViewer from './videoPlayerViewer.js';
import {
  VideoPlayerSettings,
  repeat,
  autoplay
} from './videoPlayerSettings.js';
import VideoPlayerErrorPane from './videoPlayerErrorPane.js';

const videoViewerWidth = "100%";
const videoPlayerAreaClass = "video-player-area";
const iframeWrapperClass = "iframe-wrapper";
const noPlayerImgClass = "no-video-img";
const noVideoImgSrc = "img/no_video.jpg";
const noVideoImgAlt = "No video has been loaded";


export default class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      playerError: false,
      playerErrorCode: null,
      autoplay: true,
      loopplay: false,
      playerReady: false,
      videoHeight: (window.innerWidth < 1139 ? (window.innerWidth < 764 ? "240px" : "300px") : "360px")
    }
  }

  componentDidMount() {

    //Sets a listener for changing video player height when screen dimensions change
    window.addEventListener('resize', this.updateWindowDimensions.bind(this));
  }

  //Listens to dimensions changes.
  updateWindowDimensions() {
    this.setState({
      videoHeight: (window.innerWidth < 1139 ? (window.innerWidth < 764 ? "240px" : "300px") : "360px")
    })
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
    if(!this.props.video || !nextProps.video || this.props.video.id !== nextProps.video.id) {
      this.setState({
        playerError: false,
        playerErrorCode: null
      })
    }
  }

  handleError(errCode) {
    this.setState({
      playerError:true,
      playerErrorCode: errCode
    })
  }

  /*handleReady fixes a bug that happens if you are quick enough to request
  playing a video before the player is ready. Player rendering is delayed
  until the player is ready (no video is passed until then)*/
  handleReady() {
    this.setState({
      playerReady: true
    })
  }

  render() {
    const video = this.props.video;
    /*If an error is detected on the player an error pane will be displayed on
    top of the player, if no video is loaded a no video img will be displayed*/
    return (
      <div className={videoPlayerAreaClass}>

        <div className={iframeWrapperClass}>

          <VideoPlayerViewer
            video={this.state.playerReady ? this.props.video : null}
            autoplay={this.state.autoplay}
            loopplay={this.state.loopplay}
            defaultHeight={this.state.videoHeight}
            defaultWidth={videoViewerWidth}
            onError={this.handleError.bind(this)}
            onReady={this.handleReady.bind(this)}/>

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
          video={video}
          autoplay={this.state.autoplay}
          loopplay={this.state.loopplay}
          isFavorite={this.props.isFavorite}
          onChangeCfg={this.handleChangeCfg.bind(this)}
          onFavoriteClick={this.props.onClick}
        />
      </div>
    )
  }

}
