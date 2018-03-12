/*****************************************************************************
Video footer renders playing video title, description and other data
*****************************************************************************/

import React from 'react'



export default function VideoFooter (props) {

    const video = props.video;
    return (
      <article>
        <header>
            {
                video
                    ?  <h3>{video.title}</h3>
                    :  null
            }
        </header>
        <p> {video ? video.description : null} </p>
      </article>
    );
}
