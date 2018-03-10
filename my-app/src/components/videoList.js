import React from 'react'
import '../css/videoList.css'

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
        <div className="vidlist">
            {
                videos.length > 0 
                    ?   <ul>
                            {videos}
                        </ul>
                    :   null
            }
            
        </div>
    );
}

export default VideoList;