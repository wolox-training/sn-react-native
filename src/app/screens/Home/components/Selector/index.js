import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Selector({ onFilterTypeChange }) {
  return (
    <select onChange={onFilterTypeChange} className="filters-home selector-home" defaultValue="Seleccionar">
      <option disabled hidden value="Seleccionar">
        Seleccionar filtro
      </option>
      <option value="Nombre">Nombre</option>
      <option value="Autor">Autor</option>
    </select>
  );
}

Selector.propTypes = { onFilterTypeChange: PropTypes.func.isRequired };

export default Selector;
