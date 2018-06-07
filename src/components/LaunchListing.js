import React, {Component} from 'react'

// specific named export
export class LaunchListing extends Component {
  render(){
    let launchClass = ''
    if(this.props.country === 'USA'){
      launchClass = 'launch--usa'
    }
    return (
      <div className={launchClass}>
        <h4>{this.props.vehicle}</h4>
        <h6>{this.props.date}</h6>
      </div>
    )
  }
}
