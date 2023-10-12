import { filterData } from "../src/dataFunctions.js";
import data from "../src/data/dataset.js";
//import { data as fakeData } from './data.js';

describe("pruebas a la funcion de filterData", () => {
  it("deberia retornar el nombre de homero simpson", () => {
    const filteredData = filterData(data, "name", "Homero Simpson");
    expect(filteredData[0].name).toBe("Homero Simpson");
  });

});

/*describe('anotherExample', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */
