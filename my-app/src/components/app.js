/*****************************************************************************
Renders the app!
*****************************************************************************/

import React from 'react'
import Container from './Container.js'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  //Insert main containers here!
  render() {
    return (
      <div>
        <Container />
      </div>
    )
  }
}
