import React from "react";
import PropTypes from 'prop-types';

export default function BookContainer({books,validarImagen}){
  return (
    <div className="books-container">
      {books.map(book =>
        <div key={book.id} className="book">
          {validarImagen(book.image_url,book.title)}
          <h3 className="book-title">{book.title}</h3>
          <h3 className="book-author">{book.author}</h3>
        </div>)}
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
  ).isRequired,
  validarImagen: PropTypes.func.isRequired
};
