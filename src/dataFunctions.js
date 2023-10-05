// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
import data from "./data/dataset.js";
import { renderItems } from "./view.js";

let nombresSelect = document.getElementById("nombres-select");

let personajes = data;

let root = document.getElementById("root");

nombresSelect.addEventListener("input", (event) => {
  console.log("funciona", event.target.value);

  const selectedName = event.target.value;

  let foundPersonaje = personajes.find(
    (personaje) => personaje.name === selectedName
  );

  root.innerHTML = "";

  root.appendChild(renderItems([foundPersonaje]));
});

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return [];
};
