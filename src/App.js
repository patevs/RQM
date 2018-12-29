
/**
 * src/App.js
 * App component
 */

// imports
import React, { Component } from 'react';
import { Pane, Heading } from 'evergreen-ui'

// components
import RQM from './view'

class App extends Component {
  render(){
    return(
      <Pane>
        <Heading
        size="900"
        align="center"
        marginTop={42}
        marginBottom={21}
        >
          Random Quote Machine
        </Heading>
        <hr />
        <RQM />
        <hr />
      </Pane>
    )
  }
}

export default App;
