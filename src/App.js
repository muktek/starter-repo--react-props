import React, { Component } from 'react';
import {peopleInSpace, spaceLaunches} from './data/datasource.js'

class App extends Component {
  constructor(...args){
    super(...args)
  }

  _createSpaceCadetComponents(){

  }

  _createLaunchListingComponents(){
  }


  render() {


    return (
      <div id="app-container">

        {/*Part 1 TitleHeader Component*/}

        <ul>
          {/*Part 2 array of SpaceCadet components */}
        </ul>

        <TitleHeader theTitle='Launches'/>

        <div className="launches-list">
          {/* Part 3 array of LaunchListing components */}
        </div>
      </div>
    );
  }
}

export default App;
