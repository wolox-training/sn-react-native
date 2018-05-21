import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import dataBooks from '../../../data/Books';

import Book from './components/Book';

function BookContainer({ navigation }) {
  return (
    <ScrollView>
      {dataBooks.map(book => <Book key={book.id} book={book} navigation={navigation} />)}
    </ScrollView>
  );
}

BookContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default BookContainer;
