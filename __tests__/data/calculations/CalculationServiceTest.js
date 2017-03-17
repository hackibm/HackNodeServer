import {guessTime} from '../../../data/calculations/CalculationService';

describe('Calculation', () => {
  it('zwraca 4 dla 00:04', () => {

    expect(guessTime('00:04')).toBe(4);
  });

  it('zwraca 5 dla 5', () => {

    expect(guessTime('5')).toBe(5);
  });

  it('zwraca 5 dla 00:05', () => {

    expect(guessTime('00:05')).toBe(5);
  });
  it('zwraca 64 dla 01:04', () => {

    expect(guessTime('01:04')).toBe(64);
  });


});
