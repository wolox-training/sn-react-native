import React from 'react';
import PropTypes from 'prop-types';

import BookImage from '../../../../components/BookImage';
import './styles.css';

function BookAttr({ book }) {
  return (
    <div className="props-container-detail">
      <BookImage book={book} imageClassDefault="detail-image-default" imageClass="detail-image" />
      <div className="props-texts-container">
        <h1 className="detail-title">{book.title}</h1>
        <h2 className="detail-author detail-sub-headears">{book.author}</h2>
        <h2 className="detail-year detail-sub-headears">{book.year}</h2>
        <h2 className="detail-genre detail-sub-headears">{book.genre}</h2>
        <h3 className="detail-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
          et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </h3>
        <button className="detail-rent">Alquilar</button>
      </div>
    </div>
  );
}

export default BookAttr;

BookAttr.propTypes = {
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
