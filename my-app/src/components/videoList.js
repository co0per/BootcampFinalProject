import React from 'react'
import '../css/videoList.css'

function VideoList(props) {

    let videos = props.videos;

    if(videos) {
        videos = videos.map((video) => {
            return  <li key={video.id}
                        className="animated"
                        onClick = {() => props.onClick(video)}>
                        <img src = {video.img}
                             alt = {video.imgAlt}
                             className="video-li"/>
                        <div className="vid-name-li">
                            <p className="video-li">{video.title}</p>    
                        </div>

                   </li>
        });
    }

    return (
        <div className="vidlist">
            {
                videos.length > 0
                    ?   <ul>
                            {videos}
                        </ul>
                    :   <p> No videos to show </p>
            }

        </div>
    );
}

export default VideoList;
