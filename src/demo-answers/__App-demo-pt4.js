import React, { Component } from 'react';
import Launches from './_launches-pt3.js'
import Astros from './_astros-pt4.js'

class App extends Component {
  render() {

    // pt4.1 putting astros prop data in <Astros> component
    return (
      <div id="app-container">
          <Astros astros={this.props.astros}/>
          <hr/>
          <Launches launchesList={this.props.launches}/>
      </div>
    );
  }
}

export default App;
