import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators as actionCreatorsBooks } from '../../redux/books/actions';
import { actionCreators as actionCreatorsFilter } from '../../redux/filterBooks/actions';

import Home from './layout';
import './styles.css';

const select = 'Seleccionar';
const name = 'Nombre';

class HomeContainer extends Component {
  state = { filterType: select };

  componentDidMount() {
    this.props.loadBooks();
  }

  handleFilterChange = async filter => {
    this.props.setFilter(filter.target.value);
  };

  handleFilterTypeChange = async filterType => {
    this.setState({ filterType: filterType.target.value }, this.updateBooks);
  };

  filterBook(book) {
    const attributeFilter = this.state.filterType === name ? book.title : book.author;
    return attributeFilter.toLowerCase().includes(this.props.filter);
  }

  updateBooks = () => this.props.books.filter(book => this.filterBook(book));

  render() {
    return (
      <Home
        handleFilterTypeChange={this.handleFilterTypeChange}
        handleFilterChange={this.handleFilterChange}
        books={this.updateBooks()}
        filter={this.props.filter}
      />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadBooks: () => dispatch(actionCreatorsBooks.loadBooks()),
  setFilter: filter => dispatch(actionCreatorsFilter.setFilter(filter))
});

const mapStateToProps = store => ({
  books: store.book.books,
  filter: store.filter.filter
});

HomeContainer.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      author: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      genre: PropTypes.string,
      desc: PropTypes.string,
      publisher: PropTypes.string,
      year: PropTypes.string,
      image_url: PropTypes.string
    })
  ).isRequired,
  loadBooks: PropTypes.func.isRequired,
  setFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
