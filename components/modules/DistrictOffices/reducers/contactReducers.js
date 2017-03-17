import { Map } from 'immutable';

const initialState = {
  districtOfficeContact: {
    name: '',
    contactInfo: {},
  },
  districtOfficeGroups: [],
};

const contactReducer = (state, action) => {
  switch (action.type) {
    case 'GET_CONTACT':
    console.log('GET_CONTACT');
      return { ...state, districtOfficeContact:action.response};
    case 'GET_GROUPS':
    console.log('GET_GROUPS');
        return { ...state, districtOfficeGroups:action.response};
    default:
      return initialState;
   }
};

export default contactReducer;
