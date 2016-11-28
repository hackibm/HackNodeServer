import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

module.exports = new GraphQLObjectType({
  name: 'GroupType',

  fields: {
    status: { type: GraphQLString },
    czasObslugi: { type: GraphQLString },
    lp: { type: GraphQLString },
    idGrupy: { type: GraphQLString },
    liczbaCzynnychStan: { type: GraphQLString },
    nazwaGrupy: { type: GraphQLString },
    literaGrupy: { type: GraphQLString },
    liczbaKlwKolejce: { type: GraphQLString },
    aktualnyNumer: { type: GraphQLString },
  },
});
