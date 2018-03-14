/*****************************************************************************
Video viewer renders Iframe component that allows viewing videos.
*****************************************************************************/

import React from 'react'
import '../css/videoPlayerSettings.css'
const settingAreaClass = "settings-area";
export const remove = "remove";
export const add = "add"
export const repeat = "repeat";
export const autoplay = "autoplay";

export class VideoPlayerSettings extends React.Component {

  constructor() {
    super();
    this.state = {
      active_fav: false,
      active_rep: false,
      alert: false
    };
  }

  repeatToggled() {
    this.props.onChangeCfg(repeat);
    if(this.state.active_rep){
      this.setState({ active_rep: false });
    } else {
      this.setState({ active_rep: true });
    }
  }

  autoplayToggled() {
    this.props.onChangeCfg(autoplay);
    if(this.state.active_fav){
      this.setState({ active_fav: false });
    } else {
      this.setState({ active_fav: true });
    }
  }

  handleAddFavClick(video) {
    if(!this.props.isFavorite) {

      //This line was added for debugging, comment if not necessary
      console.log("ADD!");
      this.props.onFavoriteClick(video, add);
      this.setState({ alert: true});
    } else {

      //This line was added for debugging, comment if not necessary
      console.log("REMOVE!");
      this.props.onFavoriteClick(video, remove);
      this.setState({ alert: false});
    }
  }

  render() {
    const video = this.props.video;
    return (
      <div className={settingAreaClass}>

        <p
          className={"player-option " + (this.props.autoplay ? "active" : "")}
          onClick={() => {this.autoplayToggled()}} >
          AUTOPLAY
        </p>

        <p
          className={"player-option " + (this.props.loopplay ? "active" : "")}
          onClick={() => {this.repeatToggled()}} >
          REPEAT
        </p>

        {localStorage ?
          <p
            className={"fav-button " + (this.props.isFavorite ? "active" : "")}
            onClick={() => this.handleAddFavClick(video)}>
            FAVORITE
          </p> : null}

        { this.state.alert ? <div className="alert">Video added to favorites</div>  : null }
      </div>
    );
  }
}
