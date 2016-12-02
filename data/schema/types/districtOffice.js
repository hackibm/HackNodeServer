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
      resolve: (parent) => {
        // call um data api
        return new Promise(function (resolve, reject) {
          ListaOkienekUseCase.getGroupList(parent.id, resolve);
        });
      },
    },
  },

});
