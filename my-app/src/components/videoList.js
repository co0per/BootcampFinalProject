import React from 'react'
import '../css/videoList.css'

function VideoList(props) {

    let videos = props.videos;
    let favOrRes = props.favOrRes;
    let firstOrNoRes = props.firstOrNoResult;

    if(videos) {
        videos = videos.map((video) => {
            return  <li key={video.id}
                        className="animated"
                        onClick = {() => props.onClick(video)}>
                        <img src = {video.img}
                             alt = {video.imgAlt}
                             className="video-li"/>
                        <div className="vid-title-li">
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

    // Search videos or no search results sign
    if(firstOrNoRes){
        firstOrNoRes = 'No videos found'
    } else {
        firstOrNoRes = 'What are you waiting for? Search some videos!'
    }

    return (
        <div className="vidlist">
            <div>
                {videos.length > 0 ?
                    <div>{favOrRes}
                        <ul>
                            {videos}
                        </ul>
                    </div>
                  :
                  <p className="vid-list-no-results">
                      {firstOrNoRes}
                  </p>}
            </div>
        </div>
    );
}

export default VideoList;
