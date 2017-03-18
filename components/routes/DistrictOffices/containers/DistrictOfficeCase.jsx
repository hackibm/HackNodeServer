import React ,{ PropTypes } from 'react';
import OfficeCase from './../components/OfficeCase.jsx';
import DistrictOfficeCaseView from './../components/DistrictOfficeCaseView.jsx';
import Office from './../components/Office.jsx';
import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';


class DistrictOfficeCase extends React.Component {
  static propTypes = {
      offices: PropTypes.array,
      onGetOfficesForCase: PropTypes.func
    };

  componentWillMount() {
    this.fetchOfficesForCase(this.props.params.caseId);
  }

  fetchOfficesForCase(caseId) {
    const client = new Lokka({ transport: new Transport('http://localhost:6003/graphql') });

    client.query(`
      {
        offices{
          name,
          contactInfo {
            address
            phone
            email
            openingHours
            longitude
            latitude
          }
          groups(case_id:"${caseId}"){
            nazwaGrupy,
            lacznyCzasObslugi,
            liczbaKlwKolejce
          }
        }
      }
    `).then(result => {
      console.log(JSON.stringify(result));
      const offices = result.offices.map(function (oneOffice) {
        return { name: oneOffice.name, serviceTime: oneOffice.groups[0].lacznyCzasObslugi, distance: '10 km', isOpen: false };
      });
      //  const districtOffices = result.offices.map((office) => office.name);
      console.log(offices);
      this.props.onGetOfficesForCase(offices);
    });
  }

  render() {

    var offices = null;
    console.log("render offices");
    if(this.props.offices!=null){
       offices = this.props.offices.map((g, i) => {
         var s = 'GRAY';
         if (g.isOpen) {
           if (g.serviceTime > 15) s = 'RED';
           else s = 'GREEN';
         }

         return <Office key={i} officeData={g} officeColor={s}/>});
    }

    return (
        <div>

        <DistrictOfficeCaseView offices = {offices} ></DistrictOfficeCaseView>
        </div>
    );
  }


}
export default DistrictOfficeCase;
