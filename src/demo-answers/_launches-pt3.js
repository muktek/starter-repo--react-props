import React, { Component } from 'react';


class LaunchListing extends Component {
  /*pt3.6  Logic for rendering a component for each 'Launch Listing' object */
  //     --- (Objective-d) if/else to modify rendered component

  render(){
    let theClassVal = ''
    let theLaunchName = 'NOT IMPORTANT'

    if(this.props.launchData.country === 'USA'){
      theClassVal = 'launch--usa'
      theLaunchName = this.props.launchData.vehicle
    }
    return (
      <div className={theClassVal} key={this.props.launchData.id}>
        <h4>{theLaunchName}</h4>
        <h6>{this.props.launchData.date}</h6>
      </div>
    )
  }
}

class Launches extends Component {
  /*pt3.5  helper method to map and return relevant jsx*/
  //     --- (Objective-c) dynamic component/jsx from props

  _renderLaunchesComponent(dataList){
    console.log(dataList)
    let componentJsxList = dataList.map(function(launchObj){
      return <LaunchListing launchData={launchObj}/>
    })

    return componentJsxList
  }

  render() {
    // pt3.3 check the props
    console.log(this.props.launchesList)
    return (
      <div>

          <h2>Launches</h2>
          <div className="launches-list">
            {    /*pt3.4 pass data to helper method to render relevant jsx */ }
            {this._renderLaunchesComponent(this.props.launchesList)}
          </div>

      </div>
    );
  }
}

export default Launches;
