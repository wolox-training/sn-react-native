import React from 'react';
import { ScrollView } from 'react-native';

import dataBooks from '../../../data/Books';

import Book from './components/Book';

function BookContainer() {
  return <ScrollView>{dataBooks.map(book => <Book key={book.id} book={book} />)}</ScrollView>;
}

export default BookContainer;
