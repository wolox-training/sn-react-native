import React, { Component } from 'react';
import searchImage from "../../../../../assets/ASSETS/search.svg"
import dataBooks from "../../../../../data/books.json";
import SearchBox from "./layout.js";
import "./styles.css";

export class Searcher extends Component {
  filterBook(book,filterWord){
    if(this.props.filter === "Seleccionar"){
      return true;
    }
    else {
      let attributeFilter = this.props.filter === "Nombre" ? book.title : book.author;
      return attributeFilter.toLowerCase().includes(filterWord)
    }
  }

  updateBooks(e) {
    let filteredBooks = dataBooks.filter(book => this.filterBook(book,e.target.value));
    this.props.onChange(filteredBooks);
  }

  render () {
    return <SearchBox updateBooks={this.updateBooks.bind(this)} searchImage={searchImage}/>
  }
}
