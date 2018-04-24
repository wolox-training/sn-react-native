import React, { Component } from 'react';
import defaultImage from "../../../assets/ASSETS/default_book.svg"
import "./styles.css"

export function Book({ books }) {
  return (
    <div className="books-container">
    {books.map(book =>
      <div key={book.id} className="book">
        <BookImage image_url={book.image_url} title={book.title} />
        <h3 className="book-title">{book.title}</h3>
        <h3 className="book-author">{book.author}</h3>
      </div>)}
    </div>
  )
}

class BookImage extends Component {
  state = {url: this.props.image_url,nameClass:"book-image"}

  render() {
    if(!this.props.image_url) {
      return (
        <div className="book-image">
          <img src={defaultImage} className="book-image-default" alt={this.props.title} />
        </div>
      )
    }
    return <img className="book-image" src={this.state.url} alt={this.props.title}/>
  }
}
