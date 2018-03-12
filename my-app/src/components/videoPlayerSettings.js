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
    const video = this.props.video;
    return (
      <div className={settingAreaClass}>

        <p
          className={this.props.autoplay ? "active" : null}
          onClick={() => {this.autoplayToggled()}} >
          AUTOPLAY
        </p>

        <p
          className={this.props.loopplay ? "active" : null}
          onClick={() => {this.repeatToggled()}} >
          REPEAT
        </p>

        {localStorage ?
          [<button
            onClick={() => this.props.onClick(video)}>
            ADD F
          </button>,
          <button
            onClick={() => this.props.onClick(video)}>
            DEL F
          </button>]
          : null
        }

      </div>
    );
  }
}
