import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull
} from 'graphql';

import DistrictOfficeType from './types/districtOffice';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',

  fields : {
    offices: {
      type: new GraphQLList(DistrictOfficeType),
      args: {
        id: { type: GraphQLString }
      },
      description: 'District offices optionaly identified by id field',
      resolve: (_, {id}) => {
        //call our db to resolve id
        if (id != null) {
          return [
            { id: 42,
            name: 'Ursynów'}] ;
        } else {
          return [
            { id: 41,
            name: 'Wola'},
            { id: 42,
            name: 'Ursynów'}] ;
        }


      }
    }
  }
});

const ncSchema = new GraphQLSchema({
  query: RootQueryType
  // mutation:
});


module.exports = ncSchema;
