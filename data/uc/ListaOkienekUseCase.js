import { getUmList } from '../../data/rest/UMApiService';

class ListaOkienekUseCase {

  getGroupList(idUrzedu, callback) {
    console.log('getGroupList start dla urzedu:' + idUrzedu);
    getUmList(idUrzedu, result => {
      // przetwarzanie
      // console.log('result Ewa:' + JSON.stringify(result));
      const okienka = [];
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
        });
      });

      callback(okienka);
    });
  }
}

const listaOkienekUseCase = new ListaOkienekUseCase();

module.exports = listaOkienekUseCase;
