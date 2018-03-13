/*****************************************************************************
Defines video class & video utilities.
*****************************************************************************/

export class Video {
  constructor(id, title, description, img, imgAlt) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.img = img;
    this.imgAlt = imgAlt;
  }

  //Returns true if an instance of Video has the same id.
  equals(video) {
    if(video && video instanceof Video && video.id === this.id) {
      return true;
    }
    return false;
  }

  //Returns true if this video has an equal video in a Videos array
  in(videos) {
    if(Array.isArray(videos)) {
      for(let video of videos) {
        if(this.equals(video)) {
          return true;
        }
      }
    }
    return false;
  }

}

export function initYouTubeAPI() {

  let loadYT;

  if(!loadYT) {
    loadYT = new Promise((resolve) => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => {resolve(window.YT)};
    })
  }

  return loadYT;

}
