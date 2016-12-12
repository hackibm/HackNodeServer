import React from 'react';
import DistrictOffice from './DistrictOffice.jsx';
import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';

export default class DistrictOfficesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      districtOffices: [],
    };
  }

  componentWillMount() {
    this.fetchOffices();
  }

  fetchOffices() {
    const client = new Lokka({ transport: new Transport('https://hackibmserver.mybluemix.net/graphql') });

    client.query(`
			{
			  offices{
        id,
			  name
		   }
			}
		`).then(result => {
      console.log(JSON.stringify(result));
      const districtOffices = result.offices.map(function (office) {
        return { name: office.name, id: office.id };
      });
      //  const districtOffices = result.offices.map((office) => office.name);
      console.log(districtOffices);
      this.setState({ districtOffices });
    });
  }

  render() {
    const districtOffices = this.state.districtOffices.map((office, i) => <DistrictOffice key={i} name={office.name} id={office.id}/>);
    console.log(this.state);
    return (
      <div id="officesList">
        <h3>Lista urzędów:
        </h3>
        <ul>{districtOffices}</ul>
      </div>
    );
  }

}
