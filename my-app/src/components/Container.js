import React from 'react';
import Input from './inputSearch';
import VideoList from './videoList';
import VideoArea from './videoArea.js';
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
        const favorites = (JSON.parse(localStorage.getItem('videos')));
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
        if(this.state.favorites.length > 0) {
                const favorites = this.state.favorites;
                this.setState({
                videos: favorites
            });
        }
    }

    handleAddFavoritesClick(video) {
      let favorites = this.state.favorites;
      favorites = favorites.concat(video);
      if(this.state.particularVideo) {
        this.setState({
            favorites: favorites
        });
        localStorage.setItem('videos', JSON.stringify(favorites));
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
