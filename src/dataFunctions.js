// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const filterData = (data, filterBy, value) => {
  const filteredData = data.filter((item) => item[filterBy] === value || item['facts'][filterBy] === value);

  return filteredData;
};

export const sortBy = (data, sortBy, sortOrder) => {
  if (sortOrder === "asc") {
    return data.toSorted((a, b) => (a['facts'][sortBy] > b['facts'][sortBy] ? 1 : -1));
  } else if (sortOrder === "desc") {
    return data.toSorted((a, b) => (a['facts'][sortBy] < b['facts'][sortBy] ? 1 : -1));
  }
  throw new Error("Elije asc o desc para ordenar");
};
