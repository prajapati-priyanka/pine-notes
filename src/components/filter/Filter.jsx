import { useState } from "react";
import { BiFilterAlt } from "react-icons/bi";
import "./Filter.css";

const Filter = () => {
    const [filtersMenuVisible, setFiltersMenuVisible] = useState(false);
  return (
    <div className="notes-filter-wrapper">
      <button className="btn filter-container" onClick={()=>setFiltersMenuVisible(filtersMenuVisible => !filtersMenuVisible)}>
        <BiFilterAlt title="Filter" />
      </button>
      {filtersMenuVisible ? (<div className="filter-menu">
        <header className="product-filter-clear">
          <h3 className="product-filter-heading lg-text">Filters</h3>
          <button className="btn reset md-text">
            Clear
          </button>
        </header>
        <div className="filter-type">
        <h3 className="filter-type-heading lg-text">Priority</h3>
        <div className="filter-type-container md-text">
          <input
            type="radio"
            id="low-high"
            className="input-radio"
            name="sort"
            value="Low-to-High"
            
          />
          <label htmlFor="low-high">Low To High</label>
        </div>
        <div className="filter-type-container md-text">
          <input
            type="radio"
            id="high-low"
            className="input-radio"
            name="sort"
            value="High-to-Low"
          
          />
          <label htmlFor="high-low">High To Low</label>
        </div>
      </div>
      <div className="filter-type">
        <h3 className="filter-type-heading lg-text">Date Of Updation</h3>
        <div className="filter-type-container md-text">
          <input
            type="radio"
            id="new-first"
            className="input-radio"
            name="sort"
            value="Newest First"
            
          />
          <label htmlFor="new-first">Newest First</label>
        </div>
        <div className="filter-type-container md-text">
          <input
            type="radio"
            id="old-first"
            className="input-radio"
            name="sort"
            value="Oldest First"
          
          />
          <label htmlFor="old-first">Oldest First</label>
        </div>
      </div>
      <div className="filter-type">
        <h3 className="filter-type-heading lg-text">Labels</h3>
        <div className="filter-type-container md-text">
          <input
            type="radio"
            id="low-high"
            className="input-radio"
            name="sort"
            value="Low-to-High"
            
          />
          <label htmlFor="low-high">Home</label>
        </div>
        <div className="filter-type-container md-text">
          <input
            type="radio"
            id="high-low"
            className="input-radio"
            name="sort"
            value="High-to-Low"
          
          />
          <label htmlFor="high-low">Work</label>
        </div>
      </div>
      </div>

      ) : null }
      
    </div>
  );
};

export { Filter };
