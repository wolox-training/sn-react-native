import React from 'react';

import dataBooks from '../../../../../data/books.json';

import SuggestionsLayout from './layout';

class Suggestions extends React.Component {
  state = { books: [] };

  componentWillMount = () => {
    this.setState({ books: this.getRandomSuggestions() });
  };

  getRandomSuggestions = () => dataBooks.sort(() => 0.5 - Math.random()).slice(0, 4);

  render() {
    return <SuggestionsLayout books={this.state.books} />;
  }
}

export default Suggestions;
