import { initCloudant } from '../../../data/cloudant/CloudantService';


describe('Baza danych Cloudant', () => {
  const db = initCloudant('um');

  it('zawiera dane dla urzedu Zoliborz', () => {
    const promise = db.find({ 'selector': { 'name': 'Urząd Dzielnicy Wola' } });
    promise.then((result) => {
      expect(result.docs.length).toBe(1);
    });
  });

  it('zwraca niepustą listę wszystkich Urzędów (ponad 4)', () => {
    db.find({ 'selector': {} }, (er, result) => {
      expect(result.docs.length).toBeGreaterThan(4);
    });
  });
});

describe('Baza danych archiwalnych Cloudant', () => {
  const db = initCloudant('umdata');

  it('zawiera dane dla urzedu Zoliborz', () => {
    db.find({ 'selector': { 'payload.umName': 'UD Zoliborz' } }, (er, result) => {
      expect(result.docs.length).not.toBe(0);
    });
  });
});
