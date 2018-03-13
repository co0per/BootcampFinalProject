/*****************************************************************************
Video viewer renders Iframe component that allows viewing videos.
TODO: Implement for settings like loop play...
*****************************************************************************/

import React from 'react'
import '../css/videoPlayerSettings.css'
const settingAreaClass = "settings-area";
const repeatCheckboxId = "repeat-checkbox";
const autoplayCheckboxId = "autoplay-checkbox";
export const repeat = "repeat";
export const autoplay = "autoplay";

export class VideoPlayerSettings extends React.Component {

  constructor() {
    super();
    this.state = {
      active_fav: false,
      active_rep: false
    };
  }

  repeatToggled() {
    this.props.onChangeCfg(repeat);
    if(this.state.active_rep){
      document.getElementById("rep").style.color = "lightgrey";
      document.getElementById("rep").style.textShadow = "0px 0px 0px black";
      this.setState({ active_rep: false });
    } else {
      document.getElementById("rep").style.color = "white";
      document.getElementById("rep").style.textShadow = "3px 3px 0px black";
      this.setState({ active_rep: true });
    }
  }

  autoplayToggled() {
    this.props.onChangeCfg(autoplay);
    if(this.state.active_fav){
      document.getElementById("fav").style.color = "lightgrey";
      document.getElementById("fav").style.textShadow = "0px 0px 0px black";
      this.setState({ active_fav: false });
    } else {
      document.getElementById("fav").style.color = "white";
      document.getElementById("fav").style.textShadow = "3px 3px 0px black";
      this.setState({ active_fav: true });
    }
  }

  render() {
    const video = this.props.video;
    return (
      <div className={settingAreaClass}>

        <label
          className="player-option"
          htmlFor={autoplayCheckboxId}
          id="fav">
          autoplay
        </label>

        <input
          className="invisible-cb"
          id={autoplayCheckboxId}
          type="checkbox"
          defaultChecked="true"
          onChange={() => {this.autoplayToggled()}} >
        </input>

        <label
          className="player-option"
          htmlFor={repeatCheckboxId}
          id="rep">
          repeat
        </label>

        <input
          className="invisible-cb"
          id={repeatCheckboxId}
          type="checkbox"
          onChange={() => {this.repeatToggled()}} >
        </input>

        <label className="fav-button"
          onClick={() => this.props.onClick(video)} >
          favorite
        </label>

      </div>
    );
  }
}
