import React from 'react';
import PropTypes from 'prop-types';

import { search } from '../../strings';
import searchImage from '../../../../../assets/ASSETS/search.svg';
import './styles.css';

function Searcher({ onFilterChange, filter }) {
  return (
    <div className="search-container-home">
      <input
        type="text"
        className="select-filter filters-home"
        onChange={onFilterChange}
        placeholder={filter || search}
      />
      <img className="search-filter" src={searchImage} alt="search-icon" />
    </div>
  );
}

Searcher.propTypes = { onFilterChange: PropTypes.func.isRequired, filter: PropTypes.string.isRequired };

export default Searcher;
