import React from 'react';
import Office from './Office.jsx';

const DistrictOfficeCaseView = (props) => {
  return (
    <div id="officesList">
      <h3>Lista urzędow:
      </h3>
      <ul>{props.offices}</ul>
    </div>
  )
}

export default DistrictOfficeCaseView;
