/*****************************************************************************
Video viewer renders Iframe component that allows viewing videos.
TODO: Implement for settings like loop play...
*****************************************************************************/

import React from 'react'

const settingAreaClass = "settings-area";
const repeatCheckboxId = "repeat-checkbox";
const autoplayCheckboxId = "autoplay-checkbox";
export const repeat = "repeat";
export const autoplay = "autoplay";

export class VideoPlayerSettings extends React.Component {

  repeatToggled() {
    this.props.onChangeCfg(repeat);
  }

  autoplayToggled() {
    this.props.onChangeCfg(autoplay);
  }

  render() {

    return (
      <div className={settingAreaClass}>

        <label
          htmlFor={autoplayCheckboxId}>
          Autoplay
        </label>

        <input
          id={autoplayCheckboxId}
          type="checkbox"
          defaultChecked="true"
          onChange={() => {this.autoplayToggled()}} >
        </input>

        <label
          htmlFor={repeatCheckboxId}>
          Repeat on finish
        </label>

        <input
          id={repeatCheckboxId}
          type="checkbox"
          onChange={() => {this.repeatToggled()}} >
        </input>

        <button
          onClick={this.props.onClick} >
          ADD TO FAVORITES
        </button>

      </div>
    )
  }
}
