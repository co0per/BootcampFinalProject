import React from 'react'
import Input from './inputSearch'
import VideoList from './videoList'
import VideoArea from './videoArea.js'
import {Video} from '../lib/video_utils.js'
import style from '../css/styles.css'

//Constants:
const appBodyClass = "app-body";
const testVideo = new Video("Hasta acá nos ayudo dios!",
                            "fOQua7ZxPls",
                            "Las pastillas del abuelo - desafios - Hasta aca nos ayudo dios!")

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            particularVideo: null,
            playingList: [],
            playingVideo: testVideo
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
        /*TODO: Will playing lists be available? */
    }

    handleSearch(videos) {
        this.setState({
            videos: videos
        });
    }

    handleClick(video) {
        this.setState({
            particularVideo: video
        });
    }

    render() {
        return (
            <div className={appBodyClass}>
                <Input onChange={videos => this.handleSearch(videos)}/>
                <VideoList videos={this.state.videos}
                           onClick={video => this.handleClick(video)}
                />
                <VideoArea
                    title={this.state.playingVideo.title}
                    description={this.state.playingVideo.description}
                    videoId={this.state.playingVideo.id}
                    defaultHeight="360"
                    defaultWidth="640" 
                />
            </div>
        );
    }
}

export default Container;