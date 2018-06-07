import React, { Component } from 'react';
import SpacePerson from './components/SpaceBro.js'
//...and the named import
import { LaunchListing } from './components/LaunchListing'


class App extends Component {
  constructor(parentClassPropsAndMethods){
    super(parentClassPropsAndMethods)

    this.state = {
      launchesShowing: true
    }
  }

  _createSpacePersonComponents(){
    const astrosArray = this.props.astros
    const componentsArray = astrosArray.map(function(spacePersonObj, index){
       return <SpacePerson theName={spacePersonObj.name} key={index}/>
    })
    return componentsArray
  }

  _createLaunchListingComponents(){
    const launchesArray = this.props.launches
    const launchListingComponentsArray = launchesArray.map(function(launchObj, indx){
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

  _hideLaunches(){
      this.setState({launchesShowing: false})
  }

  render() {
    console.log(this.props.launches)

    let launchesComponents

    if (this.state.launchesShowing === true) {
      launchesComponents = this._createLaunchListingComponents()
    }

    return (
      <div id="app-container">
        <h2>Bros in Space</h2>
        <ul>
          {this._createSpacePersonComponents()}
        </ul>

        <h2>Launches</h2>
        <div className="launches-list">

          <button onClick={ ()=>{ this._hideLaunches() } }>Hide</button>
          <hr/>
          { launchesComponents }

        </div>
      </div>
    );
  }
}

export default App;
