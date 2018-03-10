/*****************************************************************************
Video viewer players renders both video player and the video data area.
*****************************************************************************/

import React from 'react'
import VideoPlayer from './videoPlayer.js'
import VideoFooter from './videoFooter.js'
import '../css/videoArea.css'

export default class VideoArea extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {
    const ableToShow = this.props.ableToShow;
    return (
      <section className="vidarea">
        {
            ableToShow
                ?   <div>
                        <VideoPlayer
                          title={this.props.video.title}
                          videoId={this.props.video.videoId}
                          ableToShow={this.props.ableToShow}
                          defaultHeight={this.props.defaultHeight}
                          defaultWidth={this.props.defaultWidth} />

                        <VideoFooter
                          title={this.props.title}
                          description={this.props.video.description} />
                    </div>

                : null
        }
        
      </section>
    );
  }
}
