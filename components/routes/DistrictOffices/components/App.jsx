import React from 'react';
import {Link} from 'react-router';
import buttonStyles from './buttonStyles.js'

const App = (props) => {
    return (
      <div>
        <h1 style={{
          "margin-top": "20px",
          "margin-left": "20px",
          "text-align": "center",
          "vertical-align": "middle",
          "line-height": "90px"
        }}>Stacz kolejkowy</h1>
      <Link to="cases" style={buttonStyles}>Załatw sprawę</Link>
        <div style={{
          "display": "inline",
          "overflow": "hidden"
        }}>
          <div style={{
            "float": "left",
            "margin-left": "20px"
          }}>{props.children}</div>
          <div style={{
            "float": "left"
          }}>
            <img src="./images/kolejka.jpeg" style={{
              "width": "800px",
              "margin-top": "40px",
              "margin-left": "20px"
            }}></img>
          </div>
        </div>
      </div>
    );
  }

export default App;
