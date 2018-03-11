/*****************************************************************************
This component is showed when an error occurs on the video player.
*****************************************************************************/

import React from 'react';

const playerErrPane = "player-err-pane"
const errorImgSrc = "img/error_on_player.jpg";
const videoError = {
  badId: "Video Id not valid.",
  htmlError: "Can't play this video on HTML5 player.",
  notAvailable: "The requested video is no longer available.",
  cantPlay: "The requested video can't be played on this player.",
  unknown: "An unknown error has been produced."
}

export default function VideoPlaerError(props) {

  let errMsg;

  //Determines the cause of the error.
  switch (props.errorCode) {
    case 2:
      errMsg = videoError.badID;
      break;
    case 5:
      errMsg = videoError.htmlError;
      break;
    case 100:
      errMsg = videoError.notAvailable;
      break;
    case 101:
    case 150:
      errMsg = videoError.cantPlay;
      break;
    default:
      errMsg = videoError.unknown;
      break;
  }

  //This could be used for further error handling.
  console.log(errMsg);
  return (
    <div className={playerErrPane}>
      <h2> We are sorry. An error was detected on the video player.. </h2>
      <hr />
      <p> {errMsg} </p>
    </div>
  )
}
