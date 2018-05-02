import React from 'react';

function BookAttr({ book }) {
  return (
    <div className="props-container-detail">
      <img className="detail-image" src={book.image_url} alt={book.title} />
      <h1 className="detail-title">{book.title}</h1>
      <h2 className="detail-author">{book.author}</h2>
      <h2 className="detail-year">{book.year}</h2>
      <h2 className="detail-genre">{book.genre}</h2>
      <h3 className="detail-publisher">{book.publisher}</h3>
      <button className="detail-rent">Alquilar</button>
    </div>
  );
}

export default BookAttr;
