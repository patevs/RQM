
/**
 * src/App.js
 * App component
 */

// imports
import React, { Component } from 'react';
import { Pane, Heading } from 'evergreen-ui'

// components

import Divider from './shared/Divider'

import RQM from './view'

// Title component
const Title = () => (
  <Pane align="center">
    <Heading
      size={900}
      align="center"
      marginTop={42}
      marginBottom={21}
    >
      Random Quote Machine
    </Heading>
  </Pane>
);

/**
 * App component class
 */
class App extends Component {
  render(){
    return(
      <Pane>
        <Title />
        <Divider />
        <RQM />
        <Divider />
      </Pane>
    )
  }
}

export default App;
