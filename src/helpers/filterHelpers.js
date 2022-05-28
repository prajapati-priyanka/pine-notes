const filterByPriority = (data, filterState) => {
  if (filterState.priority === null) {
    return data;
  }
  const lowToHighPriority = [];
  const highToLowPrority = [];

  for (let note of data) {
    if (note.priority === "low") {
      lowToHighPriority.push(note);
    }
    if (note.priority === "high") {
      highToLowPrority.push(note);
    }
  }
  return filterState.priority === "low-to-high"
    ? lowToHighPriority.concat(highToLowPrority)
    : highToLowPrority.concat(lowToHighPriority);
};

const filterByDate = (data, filterState) => {
  if (filterState.sortByDate === null) {
    return data;
  }

  if (filterState.sortByDate === "old-first") {
    return [...data].sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
  } else {
    return [...data].sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
  }
};

const filterByLabel = (data, filterState) => {
  const labelList = filterState.labels;

  if (labelList.length < 1) return data;

  let filteredLabel = [];

  for (let note of data) {
    for (let label of note.labels) {
      if (labelList.includes(label)) {
        filteredLabel.push(note);
      }
    }
  }
  return filteredLabel;
};

const filterBySearchValue = (data, filterState) => {
  const searchByValue = filterState.searchValue.trim().toLowerCase();

  return data.filter((item) =>
    item.title.trim().toLowerCase().includes(searchByValue)
  );
};

export const getFilteredData = (data, filterState) => {
  if (filterState.searchValue.trim() !== "") {
    return filterBySearchValue(data, filterState);
  }
  const getLabelFilter = filterByLabel(data, filterState);
  const getPriorityFilter = filterByPriority(getLabelFilter, filterState);
  const getDateFilter = filterByDate(getPriorityFilter, filterState);

  return getDateFilter;
};
