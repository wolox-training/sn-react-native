import React from "react"

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
    )
}
