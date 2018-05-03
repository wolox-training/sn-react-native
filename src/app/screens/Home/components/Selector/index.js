import React from 'react';
import PropTypes from 'prop-types';

import { select, selectFilter, name, author } from '../../strings';
import './styles.css';

function Selector({ onFilterTypeChange }) {
  return (
    <select onChange={onFilterTypeChange} className="filters-home selector-home" defaultValue={select}>
      <option disabled hidden value={select}>
        {selectFilter}
      </option>
      <option value={name}>{name}</option>
      <option value={author}>{author}</option>
    </select>
  );
}

Selector.propTypes = { onFilterTypeChange: PropTypes.func.isRequired };

export default Selector;
