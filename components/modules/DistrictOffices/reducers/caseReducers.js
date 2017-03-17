import { Map } from 'immutable';
export const GET_LIST = 'GET_LIST';
import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';

const initialState ={
    cases:[]
};


const caseReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CASES':
      console.log('GET_CASES');
      return { ...state, cases:action.response};
    default:
      return initialState;
   }
};

export default caseReducer;
