import React, { Component } from 'react';

import dataBooks from '../../../data/books.json';

import Home from './layout';
import './styles.css';

const select = 'Seleccionar';
const name = 'Nombre';

<<<<<<< HEAD
export class HomeContainer extends Component {
  state = { books: [], filterType:"Seleccionar",filter:""}
=======
class HomeContainer extends Component {
  state = { books: [], filterType: select, filter: '' };

  componentWillMount() {
    this.setState({ books: dataBooks });
  }
>>>>>>> e070f83a41dc88b938b9d1cd206cef1814591fd0

  handleFilterChange = filter => {
    this.setState({ filter: filter.target.value }, this.updateBooks);
  };

  handleFilterTypeChange = filterType => {
    this.setState({ filterType: filterType.target.value }, this.updateBooks);
  };

  filterBook(book) {
    const attributeFilter = this.state.filterType === name ? book.title : book.author;
    return attributeFilter.toLowerCase().includes(this.state.filter);
  }

  updateBooks() {
    const filteredBooks = dataBooks.filter(book => this.filterBook(book));
    this.setState({ books: filteredBooks });
  }

  render() {
    return (
      <Home
        handleFilterTypeChange={this.handleFilterTypeChange}
        handleFilterChange={this.handleFilterChange}
        books={this.state.books}
      />
    );
  }
}
