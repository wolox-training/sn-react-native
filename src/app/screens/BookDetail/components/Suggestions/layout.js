import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import defaultImage from '../../../../../assets/ASSETS/default_book.svg';
import './styles.css';

function SuggestionsLayout({ books }) {
  return (
    <div className="suggestions-container">
      <h1 className="suggestions-title">Sugerencias</h1>
      <div className="suggestions-books">
        {books.map(book => (
          <div key={book.id}>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <Link to={`/books/${book.id}`}>
              {book.image_url ? (
                <img className="suggestions-image" src={book.image_url} alt={book.title} />
              ) : (
                <div className="suggestions-image">
                  <img src={defaultImage} className="suggestions-image-default" alt={book.title} />
                </div>
              )}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SuggestionsLayout;

SuggestionsLayout.propTypes = {
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
