import React from 'react';

import { getRandomValues } from '../../../../utils/arrayUtils';
import { getBooks } from '../../../../../service/service';

import SuggestionsLayout from './layout';

class Suggestions extends React.Component {
  state = { books: [] };

  componentDidMount() {
    this.getSortedBooks();
  }

  async getSortedBooks() {
    this.setState({ books: await this.getRandomSuggestions() });
  }

  getRandomSuggestions = async () => {
    const randomList = getRandomValues(await getBooks(), 4);
    return randomList;
  };

  render() {
    return <SuggestionsLayout books={this.state.books} />;
  }
}

export default Suggestions;
