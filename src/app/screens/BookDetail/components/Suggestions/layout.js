import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { suggestions } from '../../strings';
import BookImage from '../../../../components/BookImage';
import './styles.css';

function SuggestionsLayout({ books }) {
  return (
    <div className="suggestions-container">
      <h1 className="suggestions-title">{suggestions}</h1>
      <div className="suggestions-books">
        {books.map(book => (
          <div key={book.id}>
            <Link to={`/books/${book.id}`}>
              <BookImage
                book={book}
                imageClass="suggestions-image"
                imageClassDefault="suggestions-image-default"
              />
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
