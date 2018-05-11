import React, { Component } from 'react';
import { connect } from 'react-redux';

import { actionCreators } from '../../redux/books/actions';

import Home from './layout';
import './styles.css';

const select = 'Seleccionar';
const name = 'Nombre';

class HomeContainer extends Component {
  state = { filteredBooks: [], filterType: select, filter: '' };

  async componentDidMount() {
    await this.props.loadBooks();
    this.updateBooks();
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

  updateBooks() {
    this.setState({ filteredBooks: this.props.books.filter(book => this.filterBook(book)) });
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

const mapDispatchToProps = dispatch => ({
  loadBooks: () => dispatch(actionCreators.loadBooks())
});

const mapStateToProps = store => ({
  books: store.book.books
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
