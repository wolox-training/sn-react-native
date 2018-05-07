import React from 'react';
import PropTypes from 'prop-types';

import { ROUTES } from '../../config/routes';
import { getBook } from '../../../service/service';

import BookDetailLayout from './layout';

import './styles.css';

class BookDetail extends React.Component {
  state = { book: '' };

  async componentWillMount() {
    this.setState({ book: await this.findBook(this.props.match.params.id) });
  }

  async componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.id !== this.props.match.params.id) {
      this.setState({ book: await this.findBook(nextProps.match.params.id) });
    }
  }

  findBook = async id => {
    const numId = parseInt(id, 10);
    const validationBook = await getBook(numId);
    if (!validationBook) {
      window.location.href = ROUTES.HOME();
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
