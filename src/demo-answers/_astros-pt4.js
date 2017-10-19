import React, { Component } from 'react';

class Astros extends Component {
  /*pt4.2  building out simple <Astros/> component */

  render() {
    const astrosJsxList = this.props.astros.map(function(astroObj){
      return <li>{astroObj.name}</li>
    })

    return (
      <div>
          <h2>Bros In Space</h2>
          <ul>
            {astrosJsxList}
          </ul>
      </div>
    );
  }
}

export default Astros;
