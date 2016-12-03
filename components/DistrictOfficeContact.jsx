import React from 'react';
import {Link} from 'react-router';
import {Lokka} from 'lokka';
import {Transport} from 'lokka-transport-http';

export default class DistrictOfficeContact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      districtOfficeContact: {
        name: '',
        contactInfo: {}
      }
    };
  }

  componentWillMount() {
    this.fetchContacts(this.props.params.districtId);
    console.log("componentWillMount");
  }

  fetchContacts(id) {
    const client = new Lokka({transport: new Transport('http://localhost:6003/graphql')});

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
  offices(id : "831ef31a-b2a3-4cbb-aaa5-cb90fe05ad8c"){
    id,
    name,
    groups{
      nazwaGrupy,
      czasObslugi,
      liczbaCzynnychStan,
      liczbaKlwKolejce,
      aktualnyNumer
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

  render() {
    const buttonStyles = {
      "border": "none",
      "text-decoration": "none",
      "-webkit-border-radius": "20",
      "-moz-border-radius": "20",
      "border-radius": "20px",
      "font-family": "Cambria",
      "color": "#ffffff",
      "font-size": "22px",
      "background": "#89aaff",
      "padding": "10px 20px 10px 20px",
      "-webkit-box-shadow": "10px 10px 10px -8px rgba(0,0,0,0.75)",
      "-moz-box-shadow": "10px 10px 10px -8px rgba(0,0,0,0.75)",
      "box-shadow": "10px 10px 10px -8px rgba(0,0,0,0.75)"
    }
    // const names = this.state.districtOfficeContact.map((office, i) => office.name);
    // console.log("names"+JSON.stringify(names));
    // const contactInfo = this.state.districtOfficeContact.map((office, i) => office.contactInfo);
    const contactInfo = this.state.districtOfficeContact.contactInfo;
    console.log("contactInfo" + JSON.stringify(contactInfo));
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
        </div><br/><br/>
        <Link to="/" style={buttonStyles}>wróć</Link>
      </div>
    );
  }
}
