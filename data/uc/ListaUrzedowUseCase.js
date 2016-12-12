import { initCloudant } from '../../data/cloudant/CloudantService';

class ListaUrzedowUseCase {

  constructor() {
    this.db = initCloudant('um');
    console.log('konstruktor');
  }

  getUmList(idUrzedu, callback) {
    let selector;

    if (idUrzedu === '') {
      selector = { 'selector': {} };
    } else {
      selector = { 'selector': { 'wawId': idUrzedu } };
    }

    this.db.find(selector, (err, result) => {
      // przetwarzanie
      const urzedy = [];
      result.docs.forEach(urzad => {
        urzedy.push({
          id: urzad.wawId,
          name: urzad.name,
          contactInfo: {
            phone: urzad.phone,
            address: urzad.address,
            latitude: urzad.latitude,
            longitude: urzad.longitude,
            email: urzad.email,
          },
        });
      });

      callback(urzedy);
    });
  }
}

const listaUrzedowUseCase = new ListaUrzedowUseCase();

module.exports = listaUrzedowUseCase;
