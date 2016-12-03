import React from 'react';
import ReactDOM from 'react-dom';
import DistrictOfficesList from './DistrictOfficesList.jsx';
import DistrictOfficeContact from './DistrictOfficeContact.jsx';
import App from './App.jsx';
import { Router, Route, IndexRoute, hashHistory  } from 'react-router';

var app = document.getElementById('sampleQueueView');
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component = {App}>
      <IndexRoute component = {DistrictOfficesList} />
      <Route path="contact(/:districtName)" name="contact" component = {DistrictOfficeContact}/>
    </Route>
</Router>, app);
