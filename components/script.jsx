import React from 'react';
import ReactDOM from 'react-dom';
import DistrictOfficesList from './routes/DistrictOffices/containers/DistrictOfficesList.jsx';
import DistrictOfficeContact from './routes/DistrictOffices/containers//DistrictOfficeContact.jsx';
import App from './routes/DistrictOffices/components/App.jsx';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { connect, Provider } from 'react-redux';
import { combineReducers,createStore } from 'redux';
import listReducer from './modules/DistrictOffices/reducers/listReducers.js';
import contactReducer from './modules/DistrictOffices/reducers/contactReducers.js';
import { Map } from 'immutable';
import { bindActionCreators } from 'redux';
import actions from './modules/DistrictOffices/actions/actions.js';

const app = document.getElementById('sampleQueueView');

const reducers = combineReducers({
  listReducer,
  contactReducer
});

const initialState = {
    districtOffices:[],
    districtOfficeContact: {
        name: '',
        contactInfo: {},
    },
    districtOfficeGroups: [],
};

const store = createStore(reducers,{});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetList: () => dispatch({ type: 'GET_LIST' }),
    onFinishedRequest: (response) => dispatch({ type: 'FINISHED_REQUEST',response: response }),
    onGetContact: (response) => dispatch({ type: 'GET_CONTACT',response: response }),
    onGetGroups: (response) => dispatch({ type: 'GET_GROUPS',response: response })
  }
};

//const mapDispatchToProps = (dispatch) => {
//  const creators = Map()
//    .merge(...actions)
//    .filter(value => typeof value === 'function')
//    .toObject();

//  return {
//    actions: bindActionCreators(creators, dispatch),
//    dispatch
//  };
//}

const mapStateToProps = (state) => {
  console.log('mapStateToProps');
  return { districtOffices: state.listReducer.districtOffices,
        districtOfficeContact: state.contactReducer.districtOfficeContact ,
        districtOfficeGroups: state.contactReducer.districtOfficeGroups };
};


const CDistrictOfficesList = connect(mapStateToProps, mapDispatchToProps)(DistrictOfficesList);
const CDistrictOfficeContact = connect(mapStateToProps, mapDispatchToProps)(DistrictOfficeContact);

ReactDOM.render(
    <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component = {App}>
        <IndexRoute component = {CDistrictOfficesList} />
        <Route path="contact/:districtId" name="contact" component = {CDistrictOfficeContact}/>
      </Route>
    </Router></Provider>,app);
