import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { returnWord, comments } from './strings';
import BookAttr from './components/BookAttr/';
import Suggestions from './components/Suggestions/';
import NewComment from './components/NewComment/';
import Comments from './components/Comments/';

function BookDetailLayout({ book }) {
  return (
    <div className="book-detail-container">
      <Link to="/dashboard">
        <h2 className="return">{returnWord}</h2>
      </Link>
      <div className="detail-container">
        <BookAttr book={book} />
        <Suggestions book={book} />
        <div>
          <h1 className="comments-title">{comments}</h1>
          <NewComment book={book} />
          <Comments book={book} />
        </div>
      </div>
    </div>
  );
}

export default BookDetailLayout;

BookDetailLayout.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    desc: PropTypes.string,
    publisher: PropTypes.string,
    year: PropTypes.string,
    image_url: PropTypes.string
  }).isRequired
};
