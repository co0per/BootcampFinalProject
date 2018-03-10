/*****************************************************************************
Defines video class & video utilities.
*****************************************************************************/

export class Video {
  constructor(title, id, description, link, img) {
    this._title = title;
    this._id = id;
    this._description = description;
    this._link = link;
    this._img = img;
  }

  //Getters
  get title () { return this._title; }
  get id () { return this._id; }
  get description () { return this._description; }
  get link () { return this._link; }
  get img () { return this._img; }

  //Setters
  set title (title) { this._title = title; }
  set id (id) { this._id = id; }
  set description (description) { this._description = description; }
  set link (link) { this._link = link; }
  set img (img) { this.img = img; }

}

export function initYouTubeAPI() {

  let loadYT;

  if(!loadYT) {
    loadYT = new Promise((resolve) => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      window.onYouTubeIframeAPIReady = () => {console.log("chota");resolve(window.YT)};
    })
  }

  return loadYT;

}
