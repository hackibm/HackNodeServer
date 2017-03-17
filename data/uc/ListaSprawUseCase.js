import { getAllCases } from '../../data/mapping/CaseMapper';

class ListaSprawUseCase {

  getCases(callback) {
    callback(getAllCases());
  }
}

const listaSprawUseCase = new ListaSprawUseCase();
module.exports = listaSprawUseCase;
