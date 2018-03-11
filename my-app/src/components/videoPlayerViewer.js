/*****************************************************************************
Video viewer renders Iframe component that allows viewing videos.
*****************************************************************************/

import React from 'react'
import {initYouTubeAPI} from '../lib/video_utils.js'

//Youtube URL constant
//const baseURL = "https://www.youtube.com/embed/"
const iframeId = "player"


//Video viewer component
export default class VideoPlayerViewer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      playerError: false,
      videoLoaded: false
    }
  }

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

  //When component is update it loads the video which Id is passed by props.
  componentDidUpdate() {
    if(this.props.video) {
      this.player.clearVideo();
      this.player.cueVideoById(this.props.video.id)
      if(this.props.autoplay) {
        this.player.playVideo();
      }
    }
  }

  //Prevents component rendering when settings are changed.
  shouldComponentUpdate(nextProps, nextState) {
    return this.props.video !== nextProps.video;
  }

  onPlayerReady(event) {

    //This line is used for debugging purpose. Commit if not necessary.
    console.log("Player Ready...");

    if(this.props.video) {
      this.player.clearVideo();
      this.player.cueVideoById(this.props.video.id)
      if(this.props.autoplay) {
        this.player.playVideo();
      }
    }

  }

  onPlayerStateChange(event) {

    //This line is used for debugging purpose. Commit if not necessary.
    console.log("PlayerSateChanged: " + event.data);

    switch(event.data){
      case 0:
        if(this.props.loopplay) {
          event.target.playVideo();
        }
        break;
      default:
        break;
    }

    //Finally calls parent handleChange method
    this.props.onChange()

  }

  onPlayerError(event) {
    console.log("Player error: " + event.data)

    this.props.onError(event.data, this.player);

  }

  render() {
    return (
      <div id={iframeId}> </div>
    )
  }
}
