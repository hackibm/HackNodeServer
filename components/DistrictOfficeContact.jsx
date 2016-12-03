import React from 'react';
import { Link } from 'react-router';

export default class DistrictOfficeContact extends React.Component {
  constructor(props) {
    super(props);
  }

   render() {
     return (<div>
		Dane kontaktowe dla: {this.props.params.districtName}<br/>
    <Link to="/">wróć</Link>
   </div>);
   }
}
