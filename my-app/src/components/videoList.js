import React from 'react'
import '../css/videoList.css'

function VideoList(props) {

    let videos = props.videos;
    let favOrRes = props.favOrRes;

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

        //favorites or search result sign
        if(favOrRes){
            favOrRes = <h3 className="vid-list-title">FAVORITE VIDEOS</h3>;
        } else {
            favOrRes = <h3 className="vid-list-title">SEARCH RESULTS</h3>;
        }
    }

    return (
        <div className="vidlist">
            {
                videos.length > 0
                    ?   <div>
                            {favOrRes}
                            <ul>
                                {videos}
                            </ul>
                        </div>
                    :   <p> No videos to show </p>
            }

        </div>
    );
}

export default VideoList;
