import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import defaultImage from '../../../assets/ASSETS/default_book.svg';

function BookContainer({ books }) {
  return (
    <div className="books-container-home">
      {books.map(book => (
        <div key={book.id} className="book">
          <Link to="/books/${book.id}">
            {book.image_url ? (
            <img className="book-image" src={book.image_url} alt={book.title} />
            ) : (
            <div className="book-image">
              <img src={defaultImage} className="book-image-default" alt={book.title} />
            </div>
          )}
          <h3 className="book-home book-title">{book.title}</h3>
          <h3 className="book-home book-author">{book.author}</h3>
        </Link>
        </div>
      ))}
    </div>
  );
}

BookContainer.propTypes = {
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

export default BookContainer;
