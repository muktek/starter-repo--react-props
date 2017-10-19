import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';



class App extends Component {
  render() {
    //Demo -- pt1.1 : Array of JSX <li> elements
    var array1OfJsx = [
      <li>Harry Gary</li>,
      <li>Larry Terry</li>,
      <li>Moe Schmoe</li>
    ]

    //Demo -- pt1.2: Array of strings mapped to JSX <li> elements
    var mappedArrayJsx = ['Sally Bally', 'Shana Lorena', 'Paul Hall'].map(function(nameStr){
      return <li>{nameStr}</li>
    })

    //Demo -- pt1.3: arrays of jsx elements
    return (
      <div className="app-container">
          <h2>Ninjas In Space</h2>
          <ul>
            {arrayOfJsx}
            {mappedArrayJsx}
          </ul>
      </div>
    );
  }
}

export default App;
