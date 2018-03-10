/*****************************************************************************
Video footer renders playing video title, description and other data
*****************************************************************************/

import React from 'react'


export default class VideoFooter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <article>
        <header>
          <h3> {this.props.video ? this.props.video.title : null} </h3>
          <hr />
        </header>

        <article>
          <p> {this.props.video ? this.props.video.description : null} </p>
        </article>
      </article>
    )
  }
}
