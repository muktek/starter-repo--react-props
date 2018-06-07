import React, { Component } from 'react'

class SpaceBro extends Component{

   /* (1) set state in constructor method */

    constructor(parentClassPropsAndMethods){
      /*(1a) call super() -- `super` calls the React.Component's constructor() method */
      super(parentClassPropsAndMethods)
      /*(1b) call super*/
      this.state = {
        isSelected: false
      }
    }

  _toggleSelected(){
    let newStateObj

    if(this.state.isSelected === true){
      newStateObj = { isSelected : false }
    } else {
      newStateObj = { isSelected : true  }
    }

    this.setState(newStateObj)
  }

  render(){
    let selectedClassName

    if(this.state.isSelected === true){
      selectedClassName = 'selected-bro'
    } else {
      selectedClassName = ''
    }

    return (
      <li
        /* (2) event listener onClidk -- we pass an anonymous arrow-function that calls our event-handler */
        onClick={ ()=>{ this._toggleSelected() } }
        className={selectedClassName}>

        {this.props.theName}

      </li>
    )
  }
}

export default SpaceBro
