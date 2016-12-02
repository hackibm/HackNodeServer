import { initCloudant } from '../../data/cloudant/CloudantService';

class ListaUrzedowUseCase {

  constructor() {
    this.db = initCloudant('um');
    console.log('konstruktor');
  }

  getUmList() {
    return this.db.find({ 'selector': {} });
  }
}


const listaUrzedowUseCase = new ListaUrzedowUseCase();

module.exports = listaUrzedowUseCase;
