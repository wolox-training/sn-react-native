import React from 'react';
import PropTypes from 'prop-types';

import dataBooks from '../../../data/books.json';

import BookDet from './layout';

import './styles.css';

export class BookDetail extends React.Component {
  state = { book: '' };

  componentWillMount() {
    this.setState({ book: this.findBook(this.props.match.params.id) });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.setState({ book: this.findBook(nextProps.match.params.id) });
    }
  }

  findBook = id => {
    const numId = parseInt(id, 10);
    return dataBooks.find(book => book.id === numId);
  };

  render() {
    return <BookDet book={this.state.book} />;
  }
}

BookDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired })
  }).isRequired
};
