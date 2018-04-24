import React from 'react';

export default function SearchBox({updateBooks,searchImage}) {
  return (
    <div className="search-container">
      <input type="text" className="select-filter" onChange={updateBooks} placeholder="Buscar..." />
      <img className="search-filter" src={searchImage} alt="search-icon"/>
    </div>
  );
}
