import { filterData } from '../src/dataFunctions.js';
//import { data as fakeData } from './data.js';

describe('pruebas a la funcion de filterData', () => {

  it('deberia de ser una funcion', () => {
    expect(typeof filterData).toBe('function');
  });
});

/*describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */
