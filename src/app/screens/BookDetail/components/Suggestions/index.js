import React from 'react';

import { getBooks } from '../../../../../service/service';

import SuggestionsLayout from './layout';

class Suggestions extends React.Component {
  state = { books: [] };

  async componentWillMount() {
    this.setState({ books: await this.getRandomSuggestions() });
  }

  getRandomSuggestions = async () => {
    const randomList = (await getBooks()).sort(() => 0.5 - Math.random()).slice(0, 4);
    return randomList;
  };

  render() {
    return <SuggestionsLayout books={this.state.books} />;
  }
}

export default Suggestions;
