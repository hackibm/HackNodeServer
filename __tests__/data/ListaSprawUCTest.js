import ListaSprawUseCase from '../../data/uc/ListaSprawUseCase.js';

describe('Lista ze sprawami', () => {
  it('ma 4 sprawy', (done) => {
    ListaSprawUseCase.getCases(result => {
      expect(result.length).toBe(4);
      done();
    });
  });
});
