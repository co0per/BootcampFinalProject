import React from 'react'

function VideoList(props) {

    let videos = props.videos;

    if(videos) {
        videos = videos.map((video) => {
            return <li key={video.id}>
                        {video.title}
                   </li>
        });
    }

    return (
        <div>
            <ul>
                {videos}
            </ul>
        </div>
    );
}

export default VideoList;