import React from 'react'
import '../css/styles.css'

function VideoList(props) {

    let videos = props.videos;

    if(videos) {
        videos = videos.map((video) => {
            return <li key={video.id}>
                        <img src = {video.img}
                             onClick = {() => props.onClick(video)}/>
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