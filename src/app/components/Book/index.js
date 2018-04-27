import React from 'react';
import PropTypes from 'prop-types';

import BookContainer from './layout';
import './styles.css';

function Book({ books }) {
  return <BookContainer books={books} />;
}

Book.propTypes = {
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
  ).isRequired
};

export default Book;
