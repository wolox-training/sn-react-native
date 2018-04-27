import React, { Component } from 'react';
import defaultImage from "../../../assets/ASSETS/default_book.svg";
import BookContainer from "./layout.js";
import "./styles.css";

export class Book extends Component {
  validarImagen(url,title){
    if(!url) {
      return (
        <div className="book-image">
          <img src={defaultImage} className="book-image-default" alt={title} />
        </div>
      );
    }
    return <img className="book-image" src={url} alt={title}/>;
  }

  render(){
    return <BookContainer books= {this.props.books} validarImagen={this.validarImagen} />;
  }
}
