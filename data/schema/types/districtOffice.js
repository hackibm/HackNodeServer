import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';

import GroupType from './group';
import ContactInfoType from './contactInfo';
import ListaOkienekUseCase from '../../../data/uc/ListaOkienekUseCase.js';

module.exports = new GraphQLObjectType({
  name: 'DistrictOfficeType',

  fields: {
    id: { type: GraphQLID },
    name: { type: new GraphQLNonNull(GraphQLString) },

    contactInfo: {
      type: ContactInfoType,
    },
    groups: {
      type: new GraphQLList(GroupType),
      args: {
        case_id: { type: GraphQLString },
      },
      resolve: (parent, { case_id }) => {
        // call um data api
        console.log('resolve do: '+parent.id+' '+case_id);
        return new Promise(function (resolve, reject) {
          ListaOkienekUseCase.getGroupList(parent.id, case_id, resolve);
        });
      },
    },
  },

});
