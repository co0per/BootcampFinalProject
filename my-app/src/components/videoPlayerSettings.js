/*****************************************************************************
Video viewer renders Iframe component that allows viewing videos.
*****************************************************************************/

import React from 'react'

const settingAreaClass = "settings-area";
export const remove = "remove";
export const add = "add"
export const repeat = "repeat";
export const autoplay = "autoplay";

export class VideoPlayerSettings extends React.Component {

  repeatToggled() {
    this.props.onChangeCfg(repeat);
  }

  autoplayToggled() {
    this.props.onChangeCfg(autoplay);
  }

  handleAddFavClick(video) {
    if(!this.props.isFavorite) {

      //This line was added for debugging, comment if not necessary
      console.log("ADD!");

      this.props.onFavoriteClick(video, add);
    }
  }

  handleRemoveFavClick(video) {
    if(this.props.isFavorite) {

      //This line was added for debugging, comment if not necessary
      console.log("REMOVE!");

      this.props.onFavoriteClick(video, remove);
    }
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
          <button
            onClick={() => this.handleAddFavClick(video)}>
            ADD F
          </button> : null}

        {localStorage ?
          <button
            onClick={() => this.handleRemoveFavClick(video)}>
            DEL F
          </button> : null
        }

      </div>
    );
  }
}
