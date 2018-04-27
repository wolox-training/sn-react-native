import React from 'react';
import "./styles.css";

export function Selector({ onFilterTypeChange}) {
  return (
    <select onChange={onFilterTypeChange} className="select-filter selector" defaultValue="Seleccionar">
      <option disabled hidden value="Seleccionar">Seleccionar filtro</option>
      <option value="Nombre">Nombre</option>
      <option value="Autor">Autor</option>
    </select>
  );
}
