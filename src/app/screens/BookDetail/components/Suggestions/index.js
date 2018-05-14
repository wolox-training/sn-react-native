import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Immutable from 'seamless-immutable';

import { getRandomValues } from '../../../../utils/arrayUtils';

import SuggestionsLayout from './layout';

class Suggestions extends React.Component {
  state = { books: [] };

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    const randomBooks = Immutable.asMutable(this.props.books);
    this.setState({ books: getRandomValues(randomBooks, 4) });
  }

  render() {
    return <SuggestionsLayout books={this.state.books} />;
  }
}

const mapStateToProps = store => ({
  books: store.book.books
});

Suggestions.propTypes = {
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
  ).isRequired
};

export default connect(mapStateToProps)(Suggestions);
