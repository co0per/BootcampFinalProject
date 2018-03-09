import React from 'react'
import Input from './inputSearch'
import VideoList from './videoList'

class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            videos: []
        };
    }
    handleSearch(videos) {
        this.setState({
            videos: videos
        });
    }
    render() {
        return (
            <div>
                <Input onChange={videos => this.handleSearch(videos)}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

export default Container;