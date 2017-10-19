import React, { Component } from 'react';
import Launches from './_launches.js'

class App extends Component {
  render() {
    const astrosJsxList = this.props.astros.map(function(astroObj){
      return <li>{astroObj.name}</li>
    })
    return (
      <div id="app-container">
          <h2>Bros In Space</h2>
          <ul>
            {astrosJsxList}
          </ul>

          <hr/>
          {/* pt3.1 + pt3.2 Create component and pass props...see _launches-C */}
          <Launches launchesList={this.props.launches}/>
      </div>
    );
  }
}

export default App;
