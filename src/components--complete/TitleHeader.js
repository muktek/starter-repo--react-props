import React, { Component } from 'react'

class TitleHeader extends Component{
  render(){
    return (
      <header className="title-header">
        <h2>{this.props.theTitle}</h2>
      </header>
    )
  }
}

export default TitleHeader
