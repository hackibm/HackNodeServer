import React from 'react';
import OfficeCase from './../components/OfficeCase.jsx';

const DistrictOfficeCasesView = (props) => {
  return (
    <div id="officesList">
      <h3>Lista spraw:
      </h3>
      <ul>{props.officeCases}</ul>
    </div>
  )
}

export default DistrictOfficeCasesView;
