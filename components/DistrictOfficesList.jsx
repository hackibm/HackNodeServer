import React from 'react';
import DistrictOffice from './DistrictOffice.jsx';
import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';

export default class DistrictOfficesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      districtOffices: []
    };
  }

  componentWillMount() {
    this.fetchOffices();
  }

  fetchOffices() {
		const client = new Lokka({
		  transport: new Transport('http://localhost:6003/graphql')
		});

		client.query(`
			{
			  offices{
			   name,
			   groups{
			    nazwaGrupy
			  }
		   }
			}
		`).then(result => {
			console.log(JSON.stringify(result));
			var districtOffices = result.offices.map((office) => office.name);
       console.log(districtOffices);
			this.setState({ districtOffices });
		});
  }

   render() {
     const districtOffices = this.state.districtOffices.map((name, i) => <DistrictOffice key={i} name={name}/>);
     console.log(this.state);
     return (<div id="officesList">
                <h3>Lista urzędów: </h3>
                <ul>{districtOffices}</ul>
            </div>);
   }

}
