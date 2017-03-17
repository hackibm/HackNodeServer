import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'CaseType',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    groupNames: { type: new GraphQLList(GraphQLString) }
  },

});
