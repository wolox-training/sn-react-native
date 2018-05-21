import React from 'react';
import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles';
import defaultImage from '../../../../../assets/default_book.jpg';

function Book({ book }) {
  const src = book.image_url ? { uri: book.image_url } : defaultImage;

  return (
    <View style={styles.book}>
      <Image source={src} style={styles.bookImage} />
      <View>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
    </View>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string,
    desc: PropTypes.string,
    publisher: PropTypes.string,
    year: PropTypes.string,
    image_url: PropTypes.string
  }).isRequired
};

export default Book;
