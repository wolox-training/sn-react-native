import React, { Component } from 'react';

import { getBooks } from '../../../service/service';

import Home from './layout';
import './styles.css';

const select = 'Seleccionar';
const name = 'Nombre';

class HomeContainer extends Component {
  state = { books: [], filterType: select, filter: '' };

  async componentWillMount() {
    this.setState({ books: await getBooks() });
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
    const filteredBooks = (await getBooks()).filter(book => this.filterBook(book));
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
