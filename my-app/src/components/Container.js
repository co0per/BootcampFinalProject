import React from 'react'
import Input from './inputSearch'
import VideoList from './videoList'

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            particularVideo: null
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

    render() {
        return (
            <div>
                <Input onChange={videos => this.handleSearch(videos)}/>
                <VideoList videos={this.state.videos}
                           onClick={video => this.handleClick(video)}
                />
            </div>
        );
    }
}

export default Container;