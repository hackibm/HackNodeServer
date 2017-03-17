import React from 'react';
import {Link} from 'react-router';
import buttonStyles from './buttonStyles.js'
import Group from './Group.jsx';
import Address from './Address.jsx';

const DistrictOfficeContactView = (props) => {
  return (
    <div id="districtOfficeContactView">
      <h2>
        Dane kontaktowe dla: {props.name}<br/></h2>
      <Address contactInfo = {props.contactInfo}> </Address>
      <ul>{props.groupsInfo}</ul>
      <Link to="/" style={buttonStyles}>wróć</Link>
    </div>
  )
}

export default DistrictOfficeContactView;
