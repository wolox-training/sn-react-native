import React from 'react';
import PropTypes from 'prop-types';

import defaultImage from '../../../assets/ASSETS/default_book.svg';

function BookImage({ book, imageClass, imageClassDefault }) {
  const nameClass = book.image_url ? imageClass : imageClassDefault;
  const source = book.image_url ? book.image_url : defaultImage;
  return (
    <div className={imageClass}>
      <img src={source} className={nameClass} alt={book.title} />
    </div>
  );
}

export default BookImage;

BookImage.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    desc: PropTypes.string,
    publisher: PropTypes.string,
    year: PropTypes.string,
    image_url: PropTypes.string
  }).isRequired,
  imageClass: PropTypes.string.isRequired,
  imageClassDefault: PropTypes.string.isRequired
};
