// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
import data from "./data/dataset.js";
import { renderItems } from "./view.js";

const nombresSelect = document.getElementById("nombres-select");

const personajes = data;

const root = document.getElementById("root");

nombresSelect.addEventListener("input", (event) => {
  console.log("funciona", event.target.value);

  const selectedName = event.target.value;

  const foundPersonaje = personajes.find(
    (personaje) => personaje.name === selectedName
  );

  root.innerHTML = "";

  root.appendChild(renderItems([foundPersonaje]));
});



export const example = () => {
  return "example";
};

export const sortBy = (data,sortBy,sortOrder) => {
  if(sortOrder === "asc") {
    return data.sort((a,b) => (a[sortBy] > b[sortBy]) ? 1:-1)
  } else if (sortOrder === "desc") {
    return data.sort((a,b) => (a[sortBy] < b[sortBy]) ? 1:-1)
  }
  throw new Error("")
};
