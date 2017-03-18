import { queryDash } from '../../../data/dash/DashService';


describe('Baza danych Dash', () => {
  it('pozwala wykonac zapytanie', (done) => {
    queryDash('select \'1\' from dual;', (result) => {
      console.log('query result');
      done();
    });
  });
});
