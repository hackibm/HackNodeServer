import React from 'react';
import {Link} from 'react-router';

export default class DistrictOffice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Wola'
    };
  }

  render() {
    const districtName = this.props.name;
    const districtNameId = this.props.id;
    console.log("state in District Office: " + this.state.districtOffices);
    const linkTo = "contact/" + districtNameId;
    const buttonStyles = {
      "border": "none",
      "text-decoration": "none",
      "-webkit-border-radius": "20",
      "-moz-border-radius": "20",
      "border-radius": "20px",
      "font-family": "Cambria",
      "color": "#ffffff",
      "font-size": "22px",
      "background": "#89aaff",
      "padding": "10px 20px 10px 20px",
      "-webkit-box-shadow": "10px 10px 10px -8px rgba(0,0,0,0.75)",
      "-moz-box-shadow": "10px 10px 10px -8px rgba(0,0,0,0.75)",
      "box-shadow": "10px 10px 10px -8px rgba(0,0,0,0.75)"
    }
    return (
      <div id="district">
        <ul>
          <Link to={`${linkTo}`} style={buttonStyles}>{districtName}</Link><br/><br/><br/></ul>
      </div>
    )
  }

}
