import React ,{ PropTypes } from 'react';
import { Link } from 'react-router';
import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';
import DistrictOfficeContactView from './../components/DistrictOfficeContactView.jsx';
import Group from './../components/Group.jsx';
import { SERVER_URL } from './serverConstants';

export default class DistrictOfficeContact extends React.Component {
  static propTypes = {
      districtOfficeContact: PropTypes.object,
      districtOfficeGroups: PropTypes.array,
      onGetGroups: PropTypes.func,
      onGetContact: PropTypes.func
    };

  componentWillMount() {
    this.fetchContacts(this.props.params.districtId);
    this.fetchGroups(this.props.params.districtId);
  }

  fetchContacts(id) {

    const client = new Lokka({ transport: new Transport(SERVER_URL) });


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
      const districtOfficeContact = result.offices.map(function (office) {
        return { name: office.name, contactInfo: office.contactInfo }
      })[0];
      console.log(districtOfficeContact);
      this.props.onGetContact(districtOfficeContact);
    });
  }

  fetchGroups(id) {
    const client = new Lokka({transport: new Transport('http://hackibmserver.mybluemix.net/graphql')});

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
      console.log("districtOfficeGroups");
        this.props.onGetGroups(districtOfficeGroups);
    });
  }

  render() {
    var contactInfo = null;
    var groupsInfo = null;
    var name = null;
    console.log("render contact");
    if(this.props.districtOfficeContact!=null){
       contactInfo = this.props.districtOfficeContact.contactInfo;
       name = this.props.districtOfficeContact.name;
    }
    if(this.props.districtOfficeGroups!=null){
       groupsInfo = this.props.districtOfficeGroups.map((g, i) => <Group key={i} groupName={g.nazwaGrupy} time={g.liczbaKlwKolejce} count={g.liczbaCzynnychStan} queue={g.liczbaKlwKolejce}/>);
    }
    return (
        <DistrictOfficeContactView name = {name} contactInfo = {contactInfo} groupsInfo={groupsInfo}></DistrictOfficeContactView>
    );
  }
}
