import React from 'react';
import "./styles.css"

export function Selector({ onFilterChange,onChange }) {
  return (
    <select onChange={onFilterChange.bind(this)} className="select-filter selector">
      <option disabled selected hidden>Seleccionar filtro</option>
      <option value="Nombre">Nombre</option>
      <option value="Autor">Autor</option>
    </select>
    )
}
