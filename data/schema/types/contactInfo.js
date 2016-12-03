import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'ContactInfoType',
  fields: {
    address: { type: GraphQLString },
    phone: { type: GraphQLString },
    email: { type: GraphQLString },
    openingHours: { type: GraphQLString },
    longitude: { type: GraphQLString },
    latitude: { type: GraphQLString },
  },

});
