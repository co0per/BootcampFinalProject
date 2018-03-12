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
