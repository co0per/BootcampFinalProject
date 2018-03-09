/*****************************************************************************
Video viewer renders Iframe component that allows viewing videos.
TODO: Implement for settings like loop play...
*****************************************************************************/

import React from 'react'

const settingAreaClass = "settings-area";

export default class VideoPlayerSettings extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    /* TODO: Insert config elements. */
    return (
      <div className={settingAreaClass}>
      </div>
    )
  }
}
