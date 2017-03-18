const ibmdb = require('ibm_db');
const db2 = {
        db: "BLUDB",
        hostname: "dashdb-entry-yp-dal09-10.services.dal.bluemix.net",
        port: 50000,
        username: "a5251859-bf0e-4807-9560-f9fb0af68add-bluemix",
        password: "9e305533283fd54a408022f14ef97503abef61df6b14ef66af5b2111dfeb7417"
     };

const connString = "DRIVER={DB2};DATABASE=" + db2.db + ";UID=" + db2.username + ";PWD=" + db2.password + ";HOSTNAME=" + db2.hostname + ";port=" + db2.port;



export function queryDash(query, callback) {

  ibmdb.open(connString, function(err, conn) {
  			if (err ) {
  			 console.log("error occurred " + err.message);
  			}
  			else {
          conn.query(query, function(err, result, moreResultSets) {
            console.log('query result');
            if ( !err ) {
              console.log('query ok');
            }
            if (err) {
              console.log('query error: '+err);
            }
            conn.close(function(){
    					console.log("Connection Closed");
    					});
            callback(result);
    				});
          }
        });
    }
