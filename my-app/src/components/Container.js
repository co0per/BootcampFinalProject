import React from 'react';
import Input from './inputSearch';
import VideoList from './videoList';
import VideoArea from './videoArea.js';
import {
  storageGetVideos,
  storageInsertVideo,
  storageDeleteVideo} from '../lib/storage_utils.js';
import '../css/styles.css';
import {add, remove} from './videoPlayerSettings.js'

class Container extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            particularVideo: null,
            favorites: [],
            favoritesView: false
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        const favorites = storageGetVideos();
        if(favorites) {
            this.setState({
                favorites: favorites
            });
        }
    }

    handleSearch(videos) {
        this.setState({
            videos: videos,
            favoritesView: false
        });
    }

    handleClick(video) {
        this.setState({
            particularVideo: video
        });
    }

    handleViewFavorites() {
        if(this.state.favorites) {
          this.setState({
            favoritesView: true
          });
        }
    }

    handleFavoritesClick(video, action) {
      let favorites;
      switch(action) {
          case add:
            if(this.state.particularVideo) {
              storageInsertVideo(video);
              favorites = storageGetVideos();
              this.setState({
                favorites: favorites
              });
            }
            break;
          case remove:
            storageDeleteVideo(video);
            favorites = storageGetVideos();
            this.setState({
              favorites: favorites
            })
            break;
          default:
            break;

      }

    }

    render() {
        return (
            <div>
                <Input onChange={videos => this.handleSearch(videos)}
                       onClick={(video) => this.handleViewFavorites()}/>
                <VideoList videos={this.state.favoritesView ? this.state.favorites :this.state.videos}
                           onClick={video => this.handleClick(video)}
                           favOrRes={this.state.favoritesView}
                />
                <VideoArea
                    video={this.state.particularVideo}
                    isFavorite={this.state.particularVideo ?
                      this.state.particularVideo.in(this.state.favorites) : false}
                    onClick={(video, action) => this.handleFavoritesClick(video, action)}
                />
            </div>
        );
    }
}

export default Container;
