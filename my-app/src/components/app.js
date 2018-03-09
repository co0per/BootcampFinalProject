/*****************************************************************************
Renders the app!
*****************************************************************************/

import React from 'react'

import VideoArea from './video_area.js'
import {Video} from '../lib/video_utils.js'

//Constants:
const appBodyClass = "app-body";
const testVideo = new Video("Hasta acá nos ayudo dios!",
                            "IKkTRwM_5ao",
                            "Las pastillas del abuelo - desafios - Hasta aca nos ayudo dios!")


export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      /*TODO: Will playing lists be available? */
      playingList: [],
      playingVideo: testVideo
    }
  }

  //Insert main containers here!
  render() {
    return (
      <div className={appBodyClass}>
        <VideoArea
          title={this.state.playingVideo.title}
          description={this.state.playingVideo.description}
          videoId={this.state.playingVideo.id}
          defaultHeight="360"
          defaultWidth="640" />
      </div>
    )
  }
}
