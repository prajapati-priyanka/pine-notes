import { useState, Fragment } from "react";
import { BiFilterAlt } from "react-icons/bi";
import { useFilter, useLabels } from "../../context";
import "./Filter.css";

const Filter = () => {
  const [filtersMenuVisible, setFiltersMenuVisible] = useState(false);

  const { filterState, filterDispatch } = useFilter();
  const {
    labelsState: { labels },
  } = useLabels();

  const priorityChangeHandler = (e) => {
    filterDispatch({
      type: "UPDATE_PRIORITY",
      payload: { priority: e.target.id },
    });
  };

  const sortByDateHandler = (e) => {
    filterDispatch({
      type: "SORT_BY_DATE",
      payload: { sortByDate: e.target.id },
    });
  };
  const toggleLabelHandler = (e) => {
    let labelChecked = e.target.checked;
    let labelName = e.target.value;
    if (labelChecked) {
      filterDispatch({
        type: "SET_LABEL",
        payload: labelName,
      });
    } else {
      filterDispatch({
        type: "UNSET_LABEL",
        payload: labelName,
      });
    }
  };

  return (
    <div className="notes-filter-wrapper">
      <button
        className="btn filter-container"
        onClick={() =>
          setFiltersMenuVisible((filtersMenuVisible) => !filtersMenuVisible)
        }
      >
        <BiFilterAlt title="Filter" />
      </button>
      {filtersMenuVisible ? (
        <div className="filter-menu">
          <header className="product-filter-clear">
            <h3 className="product-filter-heading lg-text">Filters</h3>
            <button className="btn reset md-text" onClick={()=>{
              filterDispatch({type:"CLEAR_ALL"})
            }}>Clear</button>
          </header>
          <div className="filter-type">
            <h3 className="filter-type-heading lg-text">Priority</h3>
            <div className="filter-type-container md-text">
              <input
                type="radio"
                id="low-to-high"
                className="input-radio"
                name="sort"
                value="low-to-high"
                checked={filterState.priority === "low-to-high"}
                onChange={priorityChangeHandler}
              />
              <label htmlFor="low-to-high">Low To High</label>
            </div>
            <div className="filter-type-container md-text">
              <input
                type="radio"
                id="high-to-low"
                className="input-radio"
                name="sort"
                value="high-to-low"
                checked={filterState.priority === "high-to-low"}
                onChange={priorityChangeHandler}
              />
              <label htmlFor="high-to-low">High To Low</label>
            </div>
          </div>
          <div className="filter-type">
            <h3 className="filter-type-heading lg-text">Date Of Updation</h3>
            <div className="filter-type-container md-text">
              <input
                type="radio"
                id="new-first"
                className="input-radio"
                name="date"
                checked={filterState.sortByDate === "new-first"}
                onChange={sortByDateHandler}
              />
              <label htmlFor="new-first">Newest First</label>
            </div>
            <div className="filter-type-container md-text">
              <input
                type="radio"
                id="old-first"
                className="input-radio"
                name="date"
                checked={filterState.sortByDate === "old-first"}
                onChange={sortByDateHandler}
              />
              <label htmlFor="old-first">Oldest First</label>
            </div>
          </div>
          <div className="filter-type">
            <h3 className="filter-type-heading lg-text">Labels</h3>
            <div className="filter-type-container md-text">
              {labels.map((label, index) => {
                return (
                  <Fragment key={index}>
                    <input
                      type="checkbox"
                      id={index}
                      className="input-radio"
                      name="labels"
                      value={label}
                      checked={filterState.labels.includes(label)}
                      onChange={toggleLabelHandler}
                    />
                    <label htmlFor={index}>{label}</label>
                  </Fragment>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export { Filter };
