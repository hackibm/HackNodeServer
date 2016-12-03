import React from 'react';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Stacz kolejkowy</h1>
        <div style={{"display":"inline", "overflow": "hidden"}}>
          <div style={{"float": "left"}}>{this.props.children}</div>
          <div style={{"float": "left"}}>
            <img src="./images/kolejka.jpeg" style={{"width": "800px", "margin-top": "40px", "margin-left": "20px"}}></img>
          </div>
        </div>
      </div>
    );
  }
}
