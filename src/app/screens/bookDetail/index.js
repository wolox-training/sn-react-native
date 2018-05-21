import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import PropTypes from 'prop-types';

import defaultImage from '../../../assets/default_book.jpg';

import { genre, desc, publisher, year } from './strings';
import styles from './styles';

class BookDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params } = navigation.state;
    return {
      title: params.book.title
    };
  };

  render() {
    const book = this.props.navigation.getParam('book');
    const src = book.image_url ? { uri: book.image_url } : defaultImage;
    return (
      <View>
        <View style={styles.upperContainer}>
          <Image source={src} style={styles.bookImage} />
          <Text style={styles.title}>{book.title}</Text>
          <Text>{book.author}</Text>
        </View>
        <View style={styles.lowerContainer}>
          <Text>
            {genre} {book.genre}
          </Text>
          <Text>
            {year} {book.year}
          </Text>
          <Text>
            {publisher} {book.publisher}
          </Text>
          <Text>
            {desc} {book.desc}
          </Text>
        </View>
      </View>
    );
  }
}

BookDetail.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func.isRequired
  }).isRequired
};

export default BookDetail;
