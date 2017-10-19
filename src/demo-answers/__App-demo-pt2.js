import React, { Component } from 'react';



class App extends Component {
  render() {
    // pt2.0 (locate source of data back to datasource.js and how it is imported in index.js)

    // pt2.1 Data is passed in at the moment the <App> component is initialized (in index.js)
    //     --- (Objective-b) Accessing props data inside a component
    console.log(this.props.astros)
    console.log(this.props.launches)

    // pt2.2 Map over array and convert to JSX components
    //     --- (Objective-c) dynamic component/jsx from props
    const astrosJsxList = this.props.astros.map(function(astroObj){
      return <li>{astroObj.name}</li>
    })

    // pt2.3 Render
    return (
      <div className="app-container">
          <h2>Bros In Space</h2>
          <ul>
            {astrosJsxList}
          </ul>
      </div>
    );
  }
}

export default App;
