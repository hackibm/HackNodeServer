import { getUmList } from '../../data/rest/UMApiService';
import { getAllCases, mapCaseId } from '../../data/mapping/CaseMapper';
import {guessTime} from '../../data/calculations/CalculationService';


class ListaOkienekUseCase {

  getGroupList(idUrzedu, idSprawy, callback) {
    console.log('getGroupList start dla urzedu:' + idUrzedu);

    getUmList(idUrzedu, result => {

      // przetwarzanie
      var okienka = [];

      console.log('idSprawy: '+idSprawy);// idSprawy != '' &&
      if (idSprawy != '' && idSprawy != undefined ){

          var mappingResult = mapCaseId(idSprawy);
          for (var i = 0; i < result.result.grupy.length; i++){
              var okienko = result.result.grupy[i];

              if (mappingResult.includes(okienko.nazwaGrupy)) { //
                okienka.push({
                  id: okienko._id,
                  name: okienko.name,
                  status: okienko.status,
                  czasObslugi: okienko.czasObslugi,
                  lp: okienko.lp,
                  idGrupy: okienko.idGrupy,
                  liczbaCzynnychStan: okienko.liczbaCzynnychStan,
                  nazwaGrupy: okienko.nazwaGrupy,
                  literaGrupy: okienko.literaGrupy,
                  liczbaKlwKolejce: okienko.liczbaKlwKolejce,
                  aktualnyNumer: okienko.aktualnyNumer,
                  czasObslugiZunifikowany: guessTime(okienko.czasObslugi),
                  lacznyCzasObslugi: guessTime(okienko.czasObslugi)*parseInt(okienko.liczbaKlwKolejce),
                });
              }
            }
            //console.log('okienka z if: ' + okienka);



      } else {
        console.log('w else: '+idSprawy);

        result.result.grupy.forEach(okienko => {
              okienka.push({
                id: okienko._id,
                name: okienko.name,
                status: okienko.status,
                czasObslugi: okienko.czasObslugi,
                lp: okienko.lp,
                idGrupy: okienko.idGrupy,
                liczbaCzynnychStan: okienko.liczbaCzynnychStan,
                nazwaGrupy: okienko.nazwaGrupy,
                literaGrupy: okienko.literaGrupy,
                liczbaKlwKolejce: okienko.liczbaKlwKolejce,
                aktualnyNumer: okienko.aktualnyNumer,
                czasObslugiZunifikowany: guessTime(okienko.czasObslugi),
                lacznyCzasObslugi: guessTime(okienko.czasObslugi)*parseInt(okienko.liczbaKlwKolejce),
              });



            });

      }
      console.log('okienka: ' + okienka);

      callback(okienka);

    });

  }
}

const listaOkienekUseCase = new ListaOkienekUseCase();

module.exports = listaOkienekUseCase;
