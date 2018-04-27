import React, { Component } from 'react';

import dataBooks from '../../../data/books.json';

import Home from './layout';
import './styles.css';

class HomeContainer extends Component {
  state = { books: [], filterType: 'Seleccionar', filter: '' };

  componentWillMount() {
    this.setState({ books: dataBooks });
  }

  handleFilterChange = filter => {
    this.setState({ filter: filter.target.value }, this.updateBooks);
  };

  handleFilterTypeChange = filterType => {
    this.setState({ filterType: filterType.target.value }, this.updateBooks);
  };

  filterBook(book) {
    if (this.state.filterType === 'Seleccionar') {
      return true;
    }

    const attributeFilter = this.state.filterType === 'Nombre' ? book.title : book.author;
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

export default HomeContainer;
