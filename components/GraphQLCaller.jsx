import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';

export function fetchOffices() {
		const client = new Lokka({
		  transport: new Transport('https://hackibmserver.mybluemix.net/graphql')
		});

    client.query(`
			{
			  offices{
        id,
			  name
		   }
			}
		`).then(result => {
  console.log(JSON.stringify(result));
  const districtOffices = result.offices.map(function ( office ) {return { name: office.name, id: office.id} } );
//  const districtOffices = result.offices.map((office) => office.name);
  console.log(districtOffices);
  return districtOffices;
		});
  }

	export function fetchContacts(id, callback1) {
			const client = new Lokka({
				transport: new Transport('https://hackibmserver.mybluemix.net/graphql')
			});

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
	    const districtOfficeContact = result.offices.map(function ( office ) {return { name: office.name, contactInfo: office.contactInfo} } );
			console.log("odpoeidz"+JSON.stringify(districtOfficeContact));
			callback1(districtOfficeContact);
			console.log('zawolal callback');
			});
	  }
