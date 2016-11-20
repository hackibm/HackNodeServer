const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLList
} = require('graphql');

const GroupType = require('./group');
const ContactInfoType = require('./contactInfo');

module.exports = new GraphQLObjectType({
  name: 'DistrictOfficeType',

  fields: {
    id: {type: GraphQLID},
    name: { type: new GraphQLNonNull(GraphQLString)},
    contactInfo: {
      type: ContactInfoType,
      resolve: () => {
        //call local db

        return {
          address: "KEN 15, Warszawa",
          openingHours: "8-16",
          email: "ursynow@um.warszawa.pl",
          phone: "22-366-12-34"
        }
      }
    },
    groups: {
      type: new GraphQLList(GroupType),
      resolve: () => {
        //call um data api

        return [
           {
              "status":"1",
              "czasObslugi":"00:04",
              "lp":"1",
              "idGrupy":"0",
              "liczbaCzynnychStan":3,
              "nazwaGrupy":"Meldunki i dowody",
              "literaGrupy":"A",
              "liczbaKlwKolejce":0,
              "aktualnyNumer":89
           },
           {
              "status":"1",
              "czasObslugi":"00:04",
              "lp":"2",
              "idGrupy":"0",
              "liczbaCzynnychStan":1,
              "nazwaGrupy":"Wydawanie dowod\u00f3w osobistych",
              "literaGrupy":"B",
              "liczbaKlwKolejce":0,
              "aktualnyNumer":82
           }
        ];
      }
    }
  }

});
