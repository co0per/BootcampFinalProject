/*****************************************************************************
Video footer renders playing video title, description and other data
*****************************************************************************/

import React from 'react'


export default class VideoFooter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const video = this.props.video;
    return (
      <article>
        <header>
            {
                video 
                    ?  <h3>{video.title}</h3>
                    :  null
            }
        </header>
        <article>
          <p> {video ? video.description : null} </p>
        </article>
      </article>
    )
  }
}
