export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites

  const ul = document.createElement("ul");

  for(const item of data) {
    const li = document.createElement("li");
    li.innerHTML += `
    <dl itemscope itemtype="">
      <dt>Nombre:</dt><dd itemprop="name">${item.name}</dd>
      <dd itemprop="imgeUrl">${item.imageUrl}</dd>
      <dt>Descripción corta:</dt><dd itemprop="shortDescription">${item.shortDescription}</dd>
      <dt>Hechos:</dt><dd itemprop="facts">${item.facts}</dd>
    </dl>
    `;

    ul.appendChild(li);

  }

  return ul;
  
};

