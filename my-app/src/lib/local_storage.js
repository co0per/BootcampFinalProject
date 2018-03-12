

export default class Storage {

  constructor() {

    //Checks if storage is supported by browser
    this.storageAvailable = typeof(Storage) !== 'undefined';

    //If not supported and alert message is thrown
    if(!this.storageAvailable) {
      alert("We're sorry, your browser does not support local storage, you will" +
            "not be able to store your favourite videos.");
    } else {

      //Init storage variables.
      this.localStorage = window.localStorage;
    }
  }

  //Inserts data into local storage.
  localStorageInsert(key, value) {

    //If no storage support, no action is done, and false is returned
    if(!this.storageAvailable)
      return false;

    this.localStorage.setItem(key, JSON.stringify(value));
    return true;

  }

  localStorageGet(key) {

    //If no storage support, no action is done and undefined is returned.
    if(this.storageAvailable) {
      return JSON.parse(this.localStorage.getItem(key));
    }

  }

  localStorageGetAll() {

    //If storage is not available it returns an empty array
    if(!this.storageAvailable) {
      return []
    }

    let values = [];
    for(let i = 0; i < this.localStorage.length; i++) {
      const key = this.localStorage.key(i);
      values = values.concat(this.localStorageGet(key));
    }
    return values;
  }

  localStorageDelete(key) {

    //If no storage support, no action is done and false is returned.
    if(!this.storageAvailable) {
      return false;
    }

    this.localStorage.removeItem(key);
    return true;
  }

}
