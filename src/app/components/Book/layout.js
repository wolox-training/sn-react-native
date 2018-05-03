import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import BookImage from '../../components/BookImage';

function BookContainer({ books }) {
  return (
    <div className="books-container-home">
      {books.map(book => (
        <div key={book.id} className="book">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <Link to={`/books/${book.id}`}>
            <BookImage book={book} imageClass="book-image" imageClassDefault="book-image-default" />
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
