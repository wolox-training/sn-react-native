import { StyleSheet } from 'react-native';

const BOOK_SIZE = 150;

const styles = StyleSheet.create({
  upperContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    margin: 10
  },
  lowerContainer: {
    margin: 10
  },
  bookImage: {
    borderRadius: 50,
    height: BOOK_SIZE,
    width: BOOK_SIZE
  },
  author: {
    textAlign: 'right',
    fontSize: 20
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25
  }
});

export default styles;
