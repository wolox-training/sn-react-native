import React from 'react';
import PropTypes from 'prop-types';

import { getBook } from '../../../service/service';

import BookDetailLayout from './layout';

import './styles.css';

class BookDetail extends React.Component {
  state = { book: '' };

  async componentWillMount() {
    this.setState({ book: this.findBook(this.props.match.params.id) });
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.setState({ book: this.findBook(nextProps.match.params.id) });
    }
  }

  findBook = async id => {
    const numId = parseInt(id, 10);
    const validationBook = await getBook(numId);
    if (!validationBook) {
      window.location.href = '/dashboard';
    }
    return validationBook;
  };

  render() {
    return <BookDetailLayout book={this.state.book} />;
  }
}

export default BookDetail;

BookDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ id: PropTypes.string.isRequired })
  }).isRequired
};
