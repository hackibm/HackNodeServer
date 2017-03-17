/* eslint-env node */

//------------------------------------------------------------------------------
// node.js starter application for Bluemix
//------------------------------------------------------------------------------

// This application uses express as its web server
// for more info, see: http://expressjs.com
// var express = require('express');
import express from 'express';

// cfenv provides access to your Cloud Foundry environment
// for more info, see: https://www.npmjs.com/package/cfenv
import cfenv from 'cfenv';

// configuration of graphql endpoint
import ncSchema from './data/schema';
import graphqlHTTP from 'express-graphql';


// create a new express server
const app = express();

// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));


app.use('/graphql', graphqlHTTP({
  schema: ncSchema,
  graphiql: true,
}));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

   
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'XOrigin, X-Requested-With, Content-Type, Accept');

    

    // Pass to next layer of middleware
    next();
});

// get the app environment from Cloud Foundry
const appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function () {
  // print a message when the server starts listening
  console.log('server starting on ' + appEnv.url);
});
