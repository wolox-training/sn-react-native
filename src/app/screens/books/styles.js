import { StyleSheet } from 'react-native';

const BOOK_SIZE = 40;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  book: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  bookImage: {
    borderRadius: 50,
    height: BOOK_SIZE,
    width: BOOK_SIZE
  },
  author: {
    textAlign: 'right'
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'right'
  }
});

export default styles;
