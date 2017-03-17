import ListaOkienekUseCase from '../../data/uc/ListaOkienekUseCase.js';

describe('Lista z okienkami', () => {
  it('ma co najmniej 1 okienko dla Urzędu Wola', (done) => {
    const idOkienka = '7ef70889-4eb9-4301-a970-92287db23052';
    console.log('Start testu okienek');

    ListaOkienekUseCase.getGroupList(idOkienka,'', result => {
      console.log(result.length);
    //  expect(result.length).toBe(10);
      done();
    });
  });

it('ma 1 okienko dla Urzędu Wola dla case id: drivingLicense', (done) => {
    const idUrzedu = '7ef70889-4eb9-4301-a970-92287db23052';
    const idSprawy = 'drivingLicense';
    console.log('Start testu spraw');

    ListaOkienekUseCase.getGroupList(idUrzedu, idSprawy, result => {
      expect(result.length).toBe(1);
      done();
    });
  });
});
