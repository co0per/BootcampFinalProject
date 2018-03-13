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
                    :   null
            }
            
        </div>
    );
}

export default VideoList;