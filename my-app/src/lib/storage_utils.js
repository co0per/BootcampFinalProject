import {Video} from './video_utils.js';

//Gets a single video from local storage
export function storageGetVideos(){
  let videos = [];

  //First localStorage availability is checked.
  if(localStorage) {

    //Gets videos array from local storage
    const videosString = localStorage.getItem('videos');

    //If the storage key exists an array of videos is created.
    if(videosString) {
      const videosData = JSON.parse(videosString);
      for(let video of videosData) {
        videos.push(new Video(video.id, video.title, video.description,
                              video.img, video.imgAlt));
      }
    }
  }
  return videos;
}


//Inserts a new video into the local storage video array
export function storageInsertVideo(video) {

  //First localStorage availability is checked.
  if(localStorage) {

    //Checks that the video to insert is a valid video.
    if(video instanceof Video) {
      const videos = storageGetVideos();
      for(let i = 0; i < videos.length; i++) {
        if(video.id === videos[i].id) {

          //If the video id is found the previous video is replaced and array is stored again
          videos[i] = video;
          localStorage.setItem('videos', JSON.stringify(videos));
          return;
        }
      }

      //If the video id is not found the new video is added and the previous array replaced.
      localStorage.setItem('videos', JSON.stringify(videos.concat(video)));
    }
  }
}
