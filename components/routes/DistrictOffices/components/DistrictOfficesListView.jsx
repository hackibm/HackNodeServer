import React from 'react';
import DistrictOffice from './DistrictOffice.jsx';

const DistrictOfficeContactView = (props) => {
  return (
    <div id="officesList">
      <h3>Lista urzędów:
      </h3>
      <ul>{props.districtOffices}</ul>
    </div>
  )
}

export default DistrictOfficeContactView;
