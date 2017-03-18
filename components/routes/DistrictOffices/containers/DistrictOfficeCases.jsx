import React ,{ PropTypes } from 'react';
import OfficeCase from './../components/OfficeCase.jsx';
import DistrictOfficeCasesView from './../components/DistrictOfficeCasesView.jsx';
import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';


class DistrictOfficeCases extends React.Component {
  static propTypes = {
      cases: PropTypes.array,
      onGetCases: PropTypes.func
    };

  componentWillMount() {
    this.fetchOffices();
  }

  fetchOffices() {
    const client = new Lokka({ transport: new Transport('http://hackibmserver.mybluemix.net/graphql') });

    client.query(`
      {
        cases{
        id,
        name
       }
      }
    `).then(result => {
      console.log(JSON.stringify(result));
      const cases = result.cases.map(function (oneCase){
        return { name: oneCase.name, id: oneCase.id };
      });
      //  const districtOffices = result.offices.map((office) => office.name);
      console.log(cases);
      this.props.onGetCases(cases);
    });
  }

  render() {
    var officeCases = null;
    if( this.props.cases != null){

      officeCases = this.props.cases.map(function (oneCase, i) {
        const linkTo = "case/" + oneCase.id;
        return (
          <OfficeCase key={i} name={oneCase.name} id={oneCase.id} linkTo={`${linkTo}`}/>
        )
      });

      console.log("officeCases: "+officeCases)
    }
    return (
      <DistrictOfficeCasesView officeCases={officeCases}></DistrictOfficeCasesView>
    );
  }

}

export default DistrictOfficeCases;
