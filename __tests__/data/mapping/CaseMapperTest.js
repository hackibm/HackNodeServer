import { getAllCases, mapCaseId } from '../../../data/mapping/CaseMapper';

describe('Mapper', () => {
  it('zwraca 4 rekordy', () => {
    console.log('Start testu mappera');

    expect(getAllCases().length).toBe(4);
  });

  it('zwraca 5 nazw zmapowanych dla drivingLicence', () => {
    console.log('Start testu mappera');

    expect(mapCaseId('drivingLicense').length).toBe(5);
  });
});
