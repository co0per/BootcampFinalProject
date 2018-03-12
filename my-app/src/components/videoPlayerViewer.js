/*****************************************************************************
Video viewer renders Iframe component that allows viewing videos.
*****************************************************************************/

import React from 'react'
import {initYouTubeAPI} from '../lib/video_utils.js'

const iframeId = "player";
const playerViewerClass = "video-player-viewer";

//Video viewer component
export default class VideoPlayerViewer extends React.Component {

  /*ComponentDidMount is called as soon as render method has been executed. This
  means that when componentDidMount mount is called the video container already
  exists. At this point YT API is loaded and player is initialized*/
  componentDidMount() {

    const loadYT = initYouTubeAPI();

    loadYT.then((YT) => {
      this.player = new YT.Player(iframeId, {
        videoId: "none",
        height: this.props.defaultHeight,
        width: this.props.defaultWidth,
        playerVars: {
          rel: 0,
          modestbranding: 1
        },
        events: {
          'onReady': this.onPlayerReady.bind(this),
          'onStateChange': this.onPlayerStateChange.bind(this),
          'onError': this.onPlayerError.bind(this)
        }
      })
    })
  }

  /*When component is update it loads the video which Id is passed by props.
  This prevents a differed loading*/
  componentDidUpdate() {
    if(this.props.video) {
      this.player.clearVideo();
      this.player.cueVideoById(this.props.video.id);
      if(this.props.autoplay) {
        this.player.playVideo();
      }
    }
  }

  /*Prevents component rendering when settings are changed. This component
  will only be updated when the selected video is changed*/
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.video && nextProps.video) {
      return (this.props.video.id !== nextProps.video.id || this.props.visible !== nextProps.visible);
    } else {
      return this.props.video !== nextProps.video;
    }
  }

  //This event is triggered when the video player is ready.
  onPlayerReady(event) {

    //This line is used for debugging purpose. Commit if not necessary.
    console.log("Player Ready...");

    /*If a video was passed the video will be loaded in the player and played if
    autoplay is enabled*/
    if(this.props.video) {
      this.player.clearVideo();
      this.player.cueVideoById(this.props.video.id)
      if(this.props.autoplay) {
        this.player.playVideo();
      }
    }

  }

  //This methos is fired every time the player changes its state.
  onPlayerStateChange(event) {

    //This line is used for debugging purpose. Commit if not necessary.
    //console.log("PlayerSateChanged: " + event.data);

    //This switch allows to add more custom behaviour to the player.
    switch(event.data){
      case 0:
        if(this.props.loopplay) {
          event.target.playVideo();
        }
        break;
      default:
        break;
    }

  }

  //This method is called when an error occurs on the player.
  onPlayerError(event) {

    //This line is used for debugging purpose. Commit if not necessary.
    //console.log("Player error: " + event.data);

    //Error event is passed to parent component with its current error code.
    this.props.onError(event.data);

  }

  render() {
    return (
      <div
        id={iframeId}
        className={playerViewerClass}>
      </div>
    );
  }
}
