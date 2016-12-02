import { initCloudant } from '../../data/cloudant/CloudantService';

class ListaUrzedowUseCase {

  constructor() {
    this.db = initCloudant('um');
    console.log('konstruktor');
  }

  getUmList(callback) {
    this.db.find({ 'selector': {} }, (err, result) => {
      // przetwarzanie
      const urzedy = [];
      result.docs.forEach(urzad => {
        urzedy.push({
          id: urzad._id,
          name: urzad.name,
          contactInfo: {
            phone: urzad.phone,
            address: urzad.adres,
          },
        });
      });

      callback(urzedy);
    });
  }
}

const listaUrzedowUseCase = new ListaUrzedowUseCase();

module.exports = listaUrzedowUseCase;
