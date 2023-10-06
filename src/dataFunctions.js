// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const filterData = (data, filterBy, value) => {
  const filteredData = data.filter((item) => item[filterBy] === value);

  return filteredData;
};

export const sortBy = (data, sortBy, sortOrder) => {
  if (sortOrder === "asc") {
    return data.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
  } else if (sortOrder === "desc") {
    return data.sort((a, b) => (a[sortBy] < b[sortBy] ? 1 : -1));
  }
  throw new Error("");
};
