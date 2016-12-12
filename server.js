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
import cors from 'cors';

//FIXES CORS ERROR
const whitelist = [
    // Allow domains here
    'http://localhost:6003',
    'https://hackibmserver.mybluemix.net',
    'https://hackibmserver.mybluemix.net/graphql'
];
const corsOptions = {
    origin(origin, callback){
        const originIsWhitelisted = whitelist.indexOf(origin) !== -1;
        callback(null, originIsWhitelisted);
    },
    credentials: true
};



// create a new express server
const app = express();

app.use(cors(corsOptions));

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'https://hackibmserver.mybluemix.net');
    res.setHeader('Access-Control-Allow-Origin', 'https://hackibmserver.mybluemix.net/graphql');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});



// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/public'));




app.use('/graphql', graphqlHTTP({
  schema: ncSchema,
  graphiql: true,
}));

// get the app environment from Cloud Foundry
const appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
app.listen(appEnv.port, '0.0.0.0', function () {
  // print a message when the server starts listening
  console.log('server starting on ' + appEnv.url);
});
