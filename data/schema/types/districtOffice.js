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
      resolve: () => {
        // call um data api
        return new Promise(function (resolve, reject) {
          ListaOkienekUseCase.getGroupList('831ef31a-b2a3-4cbb-aaa5-cb90fe05ad8c', resolve);
        });
      },
    },
  },

});
