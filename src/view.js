export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  const ul = document.createElement("ul");

  data.forEach((item) => {
    const li = document.createElement("li");

    const img = document.createElement("img");

    img.src = item.imageUrl;

    li.innerHTML += `<dd itemprop="name">${item.name}</dd>`;
    li.appendChild(img);

    li.innerHTML += `
    <dl itemscope itemtype="">
      
      <dd itemprop="shortDescription">${item.shortDescription}</dd>
      <dt>Hechos:</dt><dd itemprop="facts">
      <dt>Comida favorita:</dt><dd itemprop="comidaFavorita">${item.facts["Comida favorita"]}</dd>
      <dt>Ocupación:</dt><dd itemprop="ocupacion">${item.facts["Ocupación"]}</dd>
      <dt>Frase célebre:</dt><dd itemprop="frase">${item.facts["Frase celebre"]}</dd>
      <dt>Frase género:</dt><dd itemprop="frase">${item.facts["Género"]}</dd>

    </dl>
    `;

    ul.appendChild(li);
  });

  return ul;
};
