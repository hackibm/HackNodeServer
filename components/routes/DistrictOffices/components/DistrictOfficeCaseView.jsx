import React from 'react';
import Office from './Office.jsx';

const DistrictOfficeCaseView = (props) => {
  return (
    <div id="officesList">
      <h3>Lista urzędow:
      </h3>
      <ul>{props.offices}</ul>
              <span>legenda</span>
              <div>
                <div style={{
                    "display": "inline",
                    "overflow": "hidden"
                  }} >
              <div style={{
                "height": "30px",
                "width": "30px",
                "float": "left",
                "margin": "10px",
                  "padding": "5px",
                "background-color":"GREY"
              }}></div><div>nieczynne</div> </div>
              <div style={{
                  "display": "inline",
                  "overflow": "hidden"
                }} >
              <div style={{
                "height": "30px",
                "width": "30px",
                "float": "left",
                "margin": "10px",
                  "padding": "5px",
                "background-color":"GREEN"
              }}></div><div>ponizej 15 min oczekiwania</div></div>
              <div style={{
                  "display": "inline",
                  "overflow": "hidden"
                }} >
              <div style={{
                "height": "30px",
                "width": "30px",
                "float": "left",
                "margin": "10px",
                  "padding": "5px",
                "background-color":"RED"
              }}></div><div>ponad 15 min oczekiwania</div></div>
              </div>
    </div>
  )
}

export default DistrictOfficeCaseView;
