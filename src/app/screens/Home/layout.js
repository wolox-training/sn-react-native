import React from 'react';
import {Book} from "../../components/Book/index.js"
import {Selector} from "./components/Selector/index.js"
import {Searcher} from "./components/Searcher/index.js"

export default function Home({ handleFilterTypeChange, handleFilterChange, books }) {
  return (
    <div className="home-container" >
      <div className="filters">
        <Selector onFilterTypeChange={handleFilterTypeChange}  />
        <Searcher onFilterChange={handleFilterChange} />
      </div>
      <Book books={books}/>
    </div>
  );
}
