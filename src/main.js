import { filterData } from "./dataFunctions.js";
import { sortBy } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const root = document.getElementById("card-container");
const nombresSelect = document.querySelector('select[name="personajes"]')
const generoSelect = document.querySelector('select[name="genero"]')
const hechoSelect = document.querySelector('select[name="hechos"]')
const ordenSelect = document.querySelector('select[name="ordenAlfabetico"]')
const buttonClear = document.querySelector('button[data-testid="button-clear"]');

root.appendChild(renderItems(data));

nombresSelect.addEventListener("change", (event) => {
  const selectedName = event.target.value;
  const personajes = data;

  const filteredPersonaje = filterData(personajes, "name", selectedName);

  root.innerHTML = "";

  root.appendChild(renderItems(filteredPersonaje));
});

generoSelect.addEventListener("change", (event) => {
  const selectedGender = event.target.value;
  const personajes = data;

  const filteredPersonajes = filterData(personajes, "Género", selectedGender);

  root.innerHTML = "";
  root.appendChild(renderItems(filteredPersonajes));
});

function ordenar() {

  const selectedHecho = hechoSelect.value
  const selectedOrden = ordenSelect.value
  //console.log(selectedHecho, selectedOrden)

  const personajes = data;

  const orderedPersonajes = sortBy(personajes, selectedHecho, selectedOrden);

  root.innerHTML = "";
  

  root.appendChild(renderItems(orderedPersonajes));

}

ordenSelect.addEventListener("change", () => {
  ordenar();
})

hechoSelect.addEventListener("change", () => {
  ordenar();
})

buttonClear.addEventListener("click", function (e) {
  e.preventDefault();
  
  root.innerHTML = "";
  
  root.appendChild(renderItems(data));
})