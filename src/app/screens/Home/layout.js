import React from 'react';
import PropTypes from 'prop-types';

import Book from '../../components/Book/index';

import Selector from './components/Selector/index';
import Searcher from './components/Searcher/index';

function Home({ handleFilterTypeChange, handleFilterChange, books }) {
  return (
    <div className="home-container">
      <div className="filters">
        <Selector onFilterTypeChange={handleFilterTypeChange} />
        <Searcher onFilterChange={handleFilterChange} />
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
  handleFilterChange: PropTypes.func.isRequired
};

export default Home;
