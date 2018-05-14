import React from 'react';
import PropTypes from 'prop-types';

import Book from '../../components/Book';

import Selector from './components/Selector';
import Searcher from './components/Searcher';

function Home({ handleFilterTypeChange, handleFilterChange, books, filter }) {
  return (
    <div className="home-container">
      <div className="filters">
        <Selector onFilterTypeChange={handleFilterTypeChange} />
        <Searcher onFilterChange={handleFilterChange} filter={filter} />
      </div>
      <Book books={books} />
    </div>
  );
}

Home.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string,
      desc: PropTypes.string,
      publisher: PropTypes.string,
      year: PropTypes.string,
      image_url: PropTypes.string
    })
  ).isRequired,
  handleFilterTypeChange: PropTypes.func.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};

export default Home;
