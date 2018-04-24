import React from 'react';
import {Book} from "../../components/Book/index.js"
import {Selector} from "./components/Selector/index.js"
import {Searcher} from "./components/Searcher/index.js"

export default function Home({handleFilterChange,handleSearchChange, books,filter}) {
  return (
    <div className="home-container" >
      <div className="filters">
        <Selector onFilterChange={handleFilterChange} />
        <Searcher onChange={handleSearchChange} filter={filter}/>
      </div>
      <Book books={books}/>
    </div>
  );
}
