/*****************************************************************************
Video footer renders playing video title, description and other data
*****************************************************************************/

import React from 'react'

const videoFooterClass = "video-footer";


export default class VideoFooter extends React.Component {

  render() {
    const video = this.props.video;
    return (
      <article className={videoFooterClass}>
        <header>
            {
                video
                    ?  <h3>  {video.title} </h3>
                    :  null
            }
        </header>
        <p> {video ? video.description : null} </p>
      </article>
    )
  }
}
