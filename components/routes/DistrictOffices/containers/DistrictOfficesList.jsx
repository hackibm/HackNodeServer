import React ,{ PropTypes } from 'react';
import DistrictOffice from './../components/DistrictOffice.jsx';
import DistrictOfficesListView from './../components/DistrictOfficesListView.jsx';
import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';
import { SERVER_URL } from './serverConstants';


class DistrictOfficesList extends React.Component {
  static propTypes = {
      districtOffices: PropTypes.array,
      onGetList: PropTypes.func,
      onFinishedRequest: PropTypes.func
    };

  componentWillMount() {
    this.fetchOffices();
  }

  fetchOffices() {
    const client = new Lokka({ transport: new Transport(SERVER_URL) });

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
      this.props.onFinishedRequest(districtOffices);
    });
  }

  render() {
    var districtOffices = null;
    if( this.props.districtOffices != null){

      districtOffices = this.props.districtOffices.map(function (office, i) {
        const linkTo = "contact/" + office.id;
        return (
          <DistrictOffice key={i} name={office.name} id={office.id} linkTo={`${linkTo}`}/>
        )
      });


    }
    return (
      <DistrictOfficesListView districtOffices={districtOffices}></DistrictOfficesListView>
    );
  }

}

export default DistrictOfficesList;
