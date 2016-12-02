import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import DistrictOfficeType from './types/districtOffice';
import ListaUrzedowUseCase from '../uc/ListaUrzedowUseCase.js';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',

  fields: {
    offices: {
      type: new GraphQLList(DistrictOfficeType),
      args: {
        id: { type: GraphQLString },
      },
      description: 'District offices optionaly identified by id field',
      resolve: (_, { id }) => {
         // call our db to resolve id
         return new Promise(function (resolve, reject) {
           ListaUrzedowUseCase.getUmList(resolve);
         });
      },
    },
  },
});

const ncSchema = new GraphQLSchema({
  query: RootQueryType,
  // mutation:
});


module.exports = ncSchema;
