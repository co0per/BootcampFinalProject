import React from 'react';
import Input from './inputSearch';
import VideoList from './videoList';
import VideoArea from './videoArea.js';
import '../css/styles.css';
import Storage from '../lib/local_storage.js';

class Container extends React.Component {

    constructor(props) {
        super(props);

        //Initializes storage.
        this.storage = new Storage();
        const favorites = this.storage.localStorageGetAll();

        this.state = {
            videos: [],
            particularVideo: null,

            //Adds favourites to container state
            favorites: favorites
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
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

    handleFavoritesClick() {
        this.setState({
            videos: this.state.favorites
        })
    }

    handleAddFavoritesClick() {
      if(this.state.particularVideo) {
        this.storage.localStorageInsert(this.state.particularVideo.id, this.state.particularVideo);
      }
    }

    render() {
        return (
            <div>
                <Input onChange={videos => this.handleSearch(videos)}
                       onClick={() => this.handleFavoritesClick()}/>
                <VideoList videos={this.state.videos}
                           onClick={video => this.handleClick(video)}
                />
                <VideoArea
                    video={this.state.particularVideo}
                    storage={this.storage}
                    onClick={() => this.handleAddFavoritesClick()}
                />
            </div>
        );
    }
}

export default Container;
