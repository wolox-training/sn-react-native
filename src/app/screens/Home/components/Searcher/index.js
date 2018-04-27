import React from 'react';
import searchImage from "../../../../../assets/ASSETS/search.svg";
import PropTypes from 'prop-types';
import "./styles.css";

function Searcher({ onFilterChange }) {
  return (
    <div className="search-container">
      <input type="text" className="select-filter" onChange={onFilterChange} placeholder="Buscar..." />
      <img className="search-filter" src={searchImage} alt="search-icon"/>
    </div>
  );
}

Searcher.propTypes = { onFilterChange: PropTypes.func.isRequired };

export default Searcher;
