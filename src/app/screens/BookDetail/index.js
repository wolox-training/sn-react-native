import React from 'react';
import PropTypes from 'prop-types';

import { ROUTES } from '../../config/routes';
import { getBook } from '../../../service/service';

import BookDetailLayout from './layout';

import './styles.css';

class BookDetail extends React.Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.id !== prevState.bookId) {
      return { ...prevState, bookId: nextProps.match.params.id };
    }
    return prevState;
  }

  state = { book: '', bookId: this.props.match.params.id };

  componentDidMount() {
    this.findBook(this.state.bookId);
  }

  componentDidUpdate(_, prevState) {
    if (this.state.bookId !== prevState.bookId) {
      this.findBook(this.state.bookId);
    }
  }

  findBook = async bookId => {
    const numId = parseInt(bookId, 10);
    const validationBook = await getBook(numId);
    if (!validationBook) {
      window.location.href = ROUTES.HOME();
    }
    this.setState({ book: validationBook });
  };

  render() {
    return <BookDetailLayout book={this.state.book} />;
  }
}

BookDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired })
  }).isRequired
};

export default BookDetail;
