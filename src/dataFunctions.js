// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.
export const filterData = (data, filterBy, value) => {
  const filteredData = data.filter(
    (item) => item[filterBy] === value || item["facts"][filterBy] === value
  );

  return filteredData;
};

export const sortBy = (data, sortBy, sortOrder) => {
  if (sortOrder === "asc") {
    return data.slice().sort((a, b) =>
      a["facts"][sortBy] > b["facts"][sortBy] ? 1 : -1
    );
  } else if (sortOrder === "desc") {
    return data.slice().sort((a, b) =>
      a["facts"][sortBy] < b["facts"][sortBy] ? 1 : -1
    );
  }
};

export const computeStats = (data, value) => {
  const totalData = data.reduce((accumulator, item) => {
    if (item.facts.Género === value) accumulator++;
    return accumulator;
  }, 0);

  return totalData;
};
