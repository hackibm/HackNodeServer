import { Map } from 'immutable';
export const GET_LIST = 'GET_LIST';
import { Lokka } from 'lokka';
import { Transport } from 'lokka-transport-http';

const initialState ={
    districtOffices:[]
};


const listReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LIST':
      console.log('GET_LIST');

      return { ...state, districtOffices:[] };
    case 'FINISHED_REQUEST':
    console.log('FINISHED_REQUEST');
    return { ...state, districtOffices:action.response};
    default:
      return initialState;
   }
};

export default listReducer;
