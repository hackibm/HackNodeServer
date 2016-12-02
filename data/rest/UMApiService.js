const Client = require('node-rest-client').Client;
const client = new Client();
const urlUM = 'https://api.um.warszawa.pl/api/action/wsstore_get/?id=';
const apiKey = '&apikey=7120fd06-ee83-445a-9dd4-63f1c0201493';

// https://api.um.warszawa.pl/api/action/wsstore_get/?id=7ef70889-4eb9-4301-a970-92287db23052
export function getUmList(idUrzedu, callback) {
  const urlUMApi = urlUM + idUrzedu + apiKey;

  client.get(urlUMApi, (data, response) => {
      // parsed response body as js object
      console.log(data);
      // raw response
      console.log(response);
      callback(data);
  });
}
