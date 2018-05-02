import React from 'react';

import dataBooks from '../../../data/books.json';

import BookAttr from './components/BookAttr/';
import Suggestions from './components/Suggestions/';
import NewComment from './components/NewComment/';
import Comments from './components/Comments/';

export class BookDetail extends React.Component {
  state = { book: '' };

  componentWillMount() {
    this.setState({ book: this.findBook() });
  }

  findBook() {
    const numId = parseInt(this.props.match.params.id);
    return dataBooks.find(book => book.id === numId);
  }

  render() {
    return (
      <div className="detail-container">
        <BookAttr book={this.state.book} />
        <Suggestions book={this.state.book} />
        <NewComment book={this.state.book} />
        <Comments book={this.state.book} />
      </div>
    );
  }
}
