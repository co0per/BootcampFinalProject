/*****************************************************************************
This component is showed when an error occurs on the video player.
*****************************************************************************/

import React from 'react';

const playerErrPane = "player-err-pane";

//This object contains all the different err messages posibilities.
const videoError = {
  badId: "A not valid video was requested.",
  htmlError: "Check your internet connection if and error continues this video can't be played on HTML5 player ",
  notAvailable: "The requested video is no longer available or it is private",
  cantPlay: "The requested video can't be played on this player.",
  unknown: "An unknown error has been produced."
}


export default function VideoPlaerError(props) {
  let errMsg;

  //Determines the cause of the error.
  switch (props.errorCode) {
    case 2:
      errMsg = videoError.badId;
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
  return (
    <div className={playerErrPane}>
      <h2> We are sorry. An error was detected on the video player... </h2>
      <hr />
      <p> <strong> {errMsg} </strong> </p>
    </div>
  )
}
