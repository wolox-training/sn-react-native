import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from '../../styles';
import defaultImage from '../../../../../assets/default_book.jpg';

class Book extends Component {
  navigation = () => {
    this.props.navigation.navigate('BookDetail', { book: this.props.book });
  };

  render() {
    const src = this.props.book.image_url ? { uri: this.props.book.image_url } : defaultImage;
    return (
      <TouchableOpacity style={styles.book} onPress={this.navigation}>
        <Image source={src} style={styles.bookImage} />
        <View>
          <Text style={styles.title}>{this.props.book.title}</Text>
          <Text style={styles.author}>{this.props.book.author}</Text>
        </View>
      </TouchableOpacity>
    );
  }
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
  }).isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired
  }).isRequired
};

export default Book;
