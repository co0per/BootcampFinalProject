/*****************************************************************************
Video viewer renders Iframe component that allows viewing videos.
*****************************************************************************/

import React from 'react'

//Youtube URL constant
const baseURL = "https://www.youtube.com/embed/"
const iframeId = "player"


//Video viewer component
export default class VideoPlayerViewer extends React.Component {

  constructor(props) {
    super(props);

  }

  onPlayerReady() {
    console.log("Player Ready....");
  }

  onPlayerStateChange() {
    console.log("PlayerSateChanged....");
  }

  render() {
    const url = `${baseURL}${this.props.videoId}?autoplay=1&enablejsapi=1`;

    return (
      <iframe
        id={iframeId}
        title={this.props.title}
        src={url}
        allowFullScreen="true"
        height={this.props.defaultHeight}
        width={this.props.defaultWidth}
        enablejsapi="1">

        <p> Your broser does not support iframes... </p>

      </iframe>
    )
  }
}
