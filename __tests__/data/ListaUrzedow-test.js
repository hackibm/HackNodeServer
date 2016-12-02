
// jest.dontMock('../components/DistrictOfficeContact.jsx');

import ListaUrzedowUseCase from '../../data/uc/ListaUrzedowUseCase.js';
import Urzad from '../../data/entities/Urzad.js';
// import { shallow } from 'enzyme';


describe('Lista z urzędami', () => {
  const lista = ListaUrzedowUseCase.getUmList();
  it('jest niepusta', () => {
    expect(lista.length).not.toBe(0);
  });

  it('zawiera Urząd Wola', () => {
    const urzadWola = new Urzad();
    urzadWola.name('Urząd Wola');
    expect(lista).toContain(urzadWola);
  });


  // it('powinna zawierać urząd Wola', () => {
  // toContain
  //  expect(contact.find('div').text()).toEqual('Dane kontaktowe dla: Wola');
  // });
});
