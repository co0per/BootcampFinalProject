/*****************************************************************************
Defines video class & video utilities.
*****************************************************************************/

export class Video {
  constructor(title, id, description) {
    this._title = title;
    this._id = id;
    this._description = description;
  }

  //Getters
  get title () { return this._title; }
  get id () { return this._id; }
  get description () { return this._description; }

  //Setters
  set title (title) { this._title = title; }
  set id (id) { this._id = id; }
  set description (description) { this._description = description; }

}
