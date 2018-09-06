import React, { Component } from 'react'

class SpaceBro extends Component{
  render(){
    return (
      <li className='spacecadet'>
        {this.props.theName}
      </li>
    )
  }
}

export default SpaceBro
