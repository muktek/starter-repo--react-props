import React, { Component } from 'react';
import SpaceCadet from './components/SpaceCadet.js'
//...and the named import
import { LaunchListing } from './components/LaunchListing'

import {peopleInSpace, spaceLaunches} from './data/datasource.js'

class App extends Component {
  constructor(...args){
    super(...args)
  }

  _createSpaceCadetComponents(){

    const componentsArray = peopleInSpace.map(function(spacePersonObj, index){
       return <SpaceCadet theName={spacePersonObj.name} key={index}/>
    })
    return componentsArray
  }

  _createLaunchListingComponents(){
    const launchListingComponentsArray = spaceLaunches.map(function(launchObj, indx){
      console.log(launchObj)
      return <LaunchListing
        vehicle={launchObj.vehicle}
        date={launchObj.date}
        country={launchObj.country}
        key={indx}
      />
    })

    return launchListingComponentsArray
  }


  render() {

    let spaceCadetComponentsArr = this._createSpaceCadetComponents()

    return (
      <div id="app-container">
        <h2>Space Cadets</h2>
        <ul>
          {spaceCadetComponentsArr}
        </ul>

        <h2>Launches</h2>
        <div className="launches-list">

          <hr/>
          { this._createLaunchListingComponents() }

        </div>
      </div>
    );
  }
}

export default App;
