import React from 'react';

const Office = (props) => {
  console.log("kolor: "+props.officeColor);
  return (
      <div>
        <div style={{"background-color":props.officeColor}}>
          <div style={{"display": "inline",
          "overflow": "hidden",
          "background-color":props.officeColor}}>
            <div style={{
              "float": "left",
              "margin-left": "20px",
              "background-color":props.officeColor
            }}>
              {props.officeData.name}
            </div>
            <div style={{
              "float": "left",
              "margin-left": "20px",
              "display":"inline-block"
            }}>
              <div>
                czas obsługi: {props.officeData.serviceTime} min
              </div>
              <div>
                godziny otwarcia: {props.officeData.openingHours}
              </div>

          </div>
        </div>
      </div>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
export default Office;
