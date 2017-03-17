import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';

import DistrictOfficeType from './types/districtOffice';
import ListaUrzedowUseCase from '../uc/ListaUrzedowUseCase.js';
import CaseType from './types/case';

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',

  fields: {
    offices: {
      type: new GraphQLList(DistrictOfficeType),
      args: {
        id: { type: GraphQLString },
        case_id: { type: GraphQLString },
      },
      description: 'District offices optionaly identified by id field',
      resolve: (_, { id }) => {
         // call our db to resolve id
         return new Promise(function (resolve, reject) {
           ListaUrzedowUseCase.getUmList(id, resolve);
         });
      },
    },
    cases: {
      type: new GraphQLList(CaseType),
      args: {
        id: { type: GraphQLString },
      },
      description: 'Cases optionaly identified by id field',
      resolve: (_, { id }) => {
         // call our db to resolve id
         return [
           {
            "id": "drivingLicense",
            "name": "Prawa jazdy",
            "groupNames" : ["D-PRAWA JAZDY","PRAWA JAZDY","Prawa Jazdy","J-PRAWA JAZDY","L: PRAWA JAZDY"],
          },
            {
             "id": "income500+",
             "name": "500+ z wykazaniem dochodu",
             "groupNames" : ["Y-500+","500+","Program 500+ Al. Solidarności","Z: PUNKT PODAWCZY, 500+", "MELDUNKI - J: 500+ Z WYKAZANIEM DOCHODU"],
           },
             {
              "id": "identityCard",
              "name": "Dowody osobiste",
              "groupNames" : ["A-DOWODY OSOBISTE","DOW. OSOBISTE(SKŁ. DOK.)","Meldunki i dowody","M-MELDUNKI, DOWODY OSOBISTE", "MELDUNKI - SKŁADANIE WNIOSKÓW"],

            },
              {
               "id": "noIncome500+",
               "name": "500+ bez wykazania dochodu",
               "groupNames" : ["Y-500+","500+","Program 500+ Al. Solidarności","Z: PUNKT PODAWCZY, 500+", "MELDUNKI - F: 500+ BEZ WYKAZANIA DOCHODU"],
             }];
      },
    },
  },
});

const ncSchema = new GraphQLSchema({
  query: RootQueryType,
  // mutation:
});


module.exports = ncSchema;
