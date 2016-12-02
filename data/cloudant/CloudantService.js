const Cloudant = require('cloudant');
const urlWithCredentials = 'https://a5251859-bf0e-4807-9560-f9fb0af68add-bluemix:9e305533283fd54a408022f14ef97503abef61df6b14ef66af5b2111dfeb7417@a5251859-bf0e-4807-9560-f9fb0af68add-bluemix.cloudant.com';

const dbCredentials = {};

export function initCloudant(dbName) {
  let cloudant;
  dbCredentials.dbName = dbName;

  if (process.env.VCAP_SERVICES) {
    const vcapServices = JSON.parse(process.env.VCAP_SERVICES);

    for (const vcapService in vcapServices) {
      if (vcapService.match(/cloudant/i)) {
        dbCredentials.url = vcapServices[vcapService][0].credentials.url;
      }
    }
  } else { // when running locally
    dbCredentials.url = urlWithCredentials;
  }

  cloudant = new Cloudant({ url: dbCredentials.url, plugin: 'promises' });

  return cloudant.use(dbCredentials.dbName);
}
