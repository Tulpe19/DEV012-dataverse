import { filterData } from "./dataFunctions.js";
import { renderItems } from "./view.js";

import data from "./data/dataset.js";

const root = document.getElementById("root");
const nombresSelect = document.getElementById("nombres-select");

root.appendChild(renderItems(data));

nombresSelect.addEventListener("input", (event) => {
  const selectedName = event.target.value;
  const personajes = data;

  const filteredPersonaje = filterData(personajes, "name", selectedName);

  root.innerHTML = "";

  root.appendChild(renderItems(filteredPersonaje));
});
