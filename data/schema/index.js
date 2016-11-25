import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';

import DistrictOfficeType from './types/districtOffice';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',

  fields : {
    office: {
      type: DistrictOfficeType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLString) }
      },
      description: 'District office identified by id field',
      resolve: () => {
        //call our db to resolve id

        return {
          id: 42,
          name: 'Ursynów',

        };
      }
    }
  }
});

const ncSchema = new GraphQLSchema({
  query: RootQueryType
  // mutation:
});


module.exports = ncSchema;
