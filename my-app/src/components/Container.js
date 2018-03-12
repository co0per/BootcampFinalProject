import React from 'react';
import Input from './inputSearch';
import VideoList from './videoList';
import VideoArea from './videoArea.js';
import {storageGetVideos, storageInsertVideo} from '../lib/storage_utils.js';
import '../css/styles.css';

class Container extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            particularVideo: null,
            favorites: []
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const favorites = storageGetVideos();
        console.log(favorites);
        if(favorites) {
            this.setState({
                favorites: favorites
            });
        }
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

    handleViewFavorites() {
        if(this.state.favorites) {
                const favorites = this.state.favorites;
                this.setState({
                videos: favorites
            });
        }
    }

    handleAddFavoritesClick(video) {
      if(this.state.particularVideo) {
        storageInsertVideo(video);
        const favorites = storageGetVideos();
        this.setState({
            favorites: favorites
        });
      }
    }

    render() {
        return (
            <div>
                <Input onChange={videos => this.handleSearch(videos)}
                       onClick={(video) => this.handleViewFavorites()}/>
                <VideoList videos={this.state.videos}
                           onClick={video => this.handleClick(video)}
                />
                <VideoArea
                    video={this.state.particularVideo}
                    storage={this.storage}
                    onClick={video => this.handleAddFavoritesClick(video)}
                />
            </div>
        );
    }
}

export default Container;
