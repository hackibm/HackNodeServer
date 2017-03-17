import React from 'react';
import {Link} from 'react-router';
import buttonStyles from './buttonStyles.js'

const DistrictOffice = (props) => {
  return (
    <div id="district">
      <ul>
        <Link to={props.linkTo} style={buttonStyles}>{props.name}</Link><br/><br/><br/></ul>
    </div>
  )
}

export default DistrictOffice;
