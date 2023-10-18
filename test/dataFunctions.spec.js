import { filterData } from "../src/dataFunctions.js";
import { sortBy } from "../src/dataFunctions.js";
import data from "../src/data/dataset.js";
//import { data as fakeData } from './data.js';

describe("pruebas a la funcion de filterData", () => {
  it("deberia retornar el nombre de homero simpson", () => {
    const filteredData = filterData(data, "name", "Homero Simpson");
    expect(filteredData[0].name).toBe("Homero Simpson");
  });

});

describe("prueba funcion sortBy", () => {
  it("deberia ordenar A-Z dependiendo del genero", () => {
    const data = [
      { facts: { name: "Pepito", genero: "m" } },
      { facts: { name: "Yanina", genero: "f" } },
      { facts: { name: "Anina", genero: "f" } },
    ];

    const sortedData = sortBy(data, 'genero', 'asc');

    expect(sortedData[0].facts.genero).toBe("f");

    expect(sortedData[sortedData.length - 1].facts.genero).toBe("m");
  });

  it("deberia ordenar Z-A dependiendo del genero", () => {
    const data = [
      { facts: { name: 'Juan', genero: "m" } },
      { facts: { name: 'Beatriz', genero: "f" } },
      { facts: { name: 'Tatiana', genero: "f" } },
    ];

    const sortedData = sortBy(data, "genero", "desc");

    expect(sortedData[0].facts.genero).toBe("m");

    expect(sortedData[sortedData.length - 1].facts.genero).toBe("f");
  });

  it("deberia de retornar una lista vacia", () => {
    const data = []
    const sortedData = sortBy(data, "genero", "desc");
    expect(sortedData.length).toBe(0)
  })
});
