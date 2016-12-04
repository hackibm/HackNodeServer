import React from 'react';
import { Link } from 'react-router';

export default class DistrictOffice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Wola',
    };
  }

  render() {
    const districtName = this.props.name;
    const districtNameId = this.props.id;
    const linkTo = 'contact/' + districtNameId;
    return (
      <div id="district">
        <ul>
          <Link to={`${linkTo}`}>{districtName}</Link>
        </ul>
      </div>
    );
  }

}
