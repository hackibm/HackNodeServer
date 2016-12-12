
// jest.dontMock('../components/DistrictOfficeContact.jsx');

import ListaUrzedowUseCase from '../../data/uc/ListaUrzedowUseCase.js';
// import Urzad from '../../data/entities/Urzad.js';
// import { shallow } from 'enzyme';


describe('Lista z urzędami', () => {
  it('ma co najmniej 4 urzędy', (done) => {
    ListaUrzedowUseCase.getUmList('', result => {
      expect(result.length).toBeGreaterThan(4);
      done();
    });
  });

  it('ma urząd o id Urzędu Wola', (done) => {
    ListaUrzedowUseCase.getUmList('831ef31a-b2a3-4cbb-aaa5-cb90fe05ad8c', result => {
      expect(result.length).toEqual(1);
      done();
    });
  });

  it('dla Urzędu Wola zwraca dane adresowe', (done) => {
    ListaUrzedowUseCase.getUmList('831ef31a-b2a3-4cbb-aaa5-cb90fe05ad8c', result => {
      // console.log('result: ' + JSON.stringify(result));
      expect(result[0].contactInfo.address.length).toBeGreaterThan(0);
      done();
    });
  });
});
