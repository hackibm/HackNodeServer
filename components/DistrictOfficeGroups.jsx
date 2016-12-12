import React from 'react';
import Group from './Group.jsx';
import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';

export default class DistrictOfficeGroups extends React.Component {
  constructor(props) {
    super(props);
	   this.state = {
     groupList: [],
	   groups : []
    };
  }


  componentWillMount() {
    this.fetchGroups();
  }

  fetchGroups() {
		const client = new Lokka({
		  transport: new Transport('https://hackibmserver.mybluemix.net/graphql')
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
			var groupList = result.offices[0].groups;
			this.setState({ groupList });

		});
  }
  render() {
   for (let i = 0; i < this.state.groupList.length; i++) {

	console.log("name" + name);
      this.state.groups.push(
        <Group groupName = {this.state.groupList[i].nazwaGrupy}/>
      );
    }

    return (<div>{this.state.groups}</div>);
  }
}
