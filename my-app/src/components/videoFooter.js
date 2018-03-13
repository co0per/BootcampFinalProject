/*****************************************************************************
Video footer renders playing video title, description and other data
*****************************************************************************/

import React from 'react'
import '../css/videoFooter.css'

export default function VideoFooter (props) {

    const video = props.video;
    return (
      <article>
        <header>
            {
                video
                    ?  <h3 className="video-title">{video.title}</h3>
                    :  null
            }
        </header>
        <p> {video ? video.description : null} </p>
      </article>
    );
}