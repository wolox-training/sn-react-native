import React, { Component } from 'react';

import { getBooks } from '../../../service/service';

import Home from './layout';
import './styles.css';

const select = 'Seleccionar';
const name = 'Nombre';

class HomeContainer extends Component {
  state = { books: [], filteredBooks: [], filterType: select, filter: '' };

  componentDidMount = () => {
    this.setInitialBooks();
  };

  async setInitialBooks() {
    const books = await getBooks();
    this.setState(() => ({ books, filteredBooks: books }));
  }

  handleFilterChange = async filter => {
    this.setState({ filter: filter.target.value }, this.updateBooks);
  };

  handleFilterTypeChange = async filterType => {
    this.setState({ filterType: filterType.target.value }, this.updateBooks);
  };

  filterBook(book) {
    const attributeFilter = this.state.filterType === name ? book.title : book.author;
    return attributeFilter.toLowerCase().includes(this.state.filter);
  }

  async updateBooks() {
    const filteredBooks = this.state.books.filter(book => this.filterBook(book));
    this.setState({ filteredBooks });
  }

  render() {
    return (
      <Home
        handleFilterTypeChange={this.handleFilterTypeChange}
        handleFilterChange={this.handleFilterChange}
        books={this.state.filteredBooks}
      />
    );
  }
}

export default HomeContainer;
