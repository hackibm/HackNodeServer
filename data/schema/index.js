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
        const promise = ListaUrzedowUseCase.getUmList();

        promise.then((result) => {
           console.log('result ewa:' + result.docs);
           return result.docs;
        }).catch(e => console.log('ERROR: ' + e));
      },
    },
  },
});

const ncSchema = new GraphQLSchema({
  query: RootQueryType,
  // mutation:
});


module.exports = ncSchema;
