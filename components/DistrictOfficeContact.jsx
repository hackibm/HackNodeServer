import React from 'react';
import { Link } from 'react-router';
import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';
import Group from './Group.jsx';

export default class DistrictOfficeContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      districtOfficeContact: {
        name: '',
        contactInfo: {},
      },
      districtOfficeGroups: [],
    };
  }

  componentWillMount() {
    this.fetchContacts(this.props.params.districtId);
    this.fetchGroups(this.props.params.districtId);
    console.log('componentWillMount');
  }

  fetchContacts(id) {
    const client = new Lokka({ transport: new Transport('http://localhost:6003/graphql') });

    client.query(`{
        offices(id :"${id}"){
          id,
          name,
          contactInfo{
            address,
            phone,
            email,
            openingHours
          }
        }
      }
      `).then(result => {
      const districtOfficeContact = result.offices.map(function(office) {
        return {name: office.name, contactInfo: office.contactInfo}
      })[0];
      console.log("odpoeidz" + JSON.stringify(districtOfficeContact));

      this.setState({districtOfficeContact});
      console.log('zawolal callback');
    });
  }

  fetchGroups(id) {
    const client = new Lokka({transport: new Transport('http://localhost:6003/graphql')});

    client.query(`{
  offices(id : "${id}"){
    id,
    name,
    groups{
      nazwaGrupy,
      czasObslugi,
      liczbaCzynnychStan,
      liczbaKlwKolejce,
      aktualnyNumer
    }
  }}
      `).then(result => {

      const districtOfficeGroups = result.offices[0].groups;
      console.log("odpoeidz" + JSON.stringify(districtOfficeGroups));

      this.setState({districtOfficeGroups});
      console.log('zawolal callback');
    });
  }

  render() {

    // const names = this.state.districtOfficeContact.map((office, i) => office.name);
    console.log("this.state.districtOfficeGroups" + JSON.stringify(this.state.districtOfficeGroups));
    // const contactInfo = this.state.districtOfficeContact.map((office, i) => office.contactInfo);
    const contactInfo = this.state.districtOfficeContact.contactInfo;
    const groupsInfo = this.state.districtOfficeGroups.map((g, i) => <Group key={i} groupName={g.nazwaGrupy} time={g.liczbaKlwKolejce} count={g.liczbaCzynnychStan}/>);

    return (
      <div>
        <h2>
          Dane kontaktowe dla: {this.state.districtOfficeContact.name}<br/></h2>
        <div>
          <span>
            <strong>Adres:
            </strong>
          </span>
          <span>
            {contactInfo.address}
          </span>
        </div>
        <div>
          <span>
            <strong>Telefon:
            </strong>
          </span>
          <span>
            {contactInfo.phone}</span>
        </div>
        <div>
          <span>
            <strong>Email:
            </strong>
          </span>
          <span>
            {contactInfo.email}
          </span>
        </div>
        <ul>{groupsInfo}</ul>

        <Link to="/">wróć</Link>
      </div>
    );
  }
}
