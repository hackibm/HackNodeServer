import React from 'react';


export default class DistrictOfficeContact extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
	
    return (<div>
		Dane kontaktowe dla: {this.props.districtName}
	</div>);
  }
}
