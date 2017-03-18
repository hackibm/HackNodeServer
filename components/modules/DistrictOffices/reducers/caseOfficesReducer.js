import { Map } from 'immutable';
import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';

const initialState ={
    offices:[]
};


const caseOfficesReducer = (state, action) => {
  switch (action.type) {
    case 'GET_OFFICES_FOR_CASE':
      console.log('GET_OFFICES_FOR_CASE');
      return { ...state, offices: action.response};
    default:
      return initialState;
   }
};

export default caseOfficesReducer;
