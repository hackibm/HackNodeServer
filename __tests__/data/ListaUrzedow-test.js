
// jest.dontMock('../components/DistrictOfficeContact.jsx');

import ListaUrzedowUseCase from '../../data/uc/ListaUrzedowUseCase.js';
// import Urzad from '../../data/entities/Urzad.js';
// import { shallow } from 'enzyme';


describe('Lista z urzędami', () => {
  it('ma co najmniej 4 urzędy', (done) => {
    const promise = ListaUrzedowUseCase.getUmList();

    promise.then((result) => {
      console.log('result:' + result.docs);
      expect(result.docs.length).toBeGreaterThan(4);
      done();
    });
  });
});
