import React from 'react';
import "./styles.css"

export function Selector({ onFilterChange }) {
  return (
    <select onChange={onFilterChange.bind(this)} className="select-filter selector">
      <option value="Seleccionar" disabled selected hidden>Seleccionar filtro</option>
      <option value="Nombre">Nombre</option>
      <option value="Autor">Autor</option>
    </select>
    )
}
