import ListaOkienekUseCase from '../../data/uc/ListaOkienekUseCase.js';

describe('Lista z okienkami', () => {
  it('ma co najmniej 1 okienko dla Urzędu Wola', (done) => {
    const idOkienka = '7ef70889-4eb9-4301-a970-92287db23052';
    console.log('Start testu okienek');

    ListaOkienekUseCase.getGroupList(idOkienka, result => {
      expect(result.length).toBeGreaterThan(0);
      done();
    });
  });
});
