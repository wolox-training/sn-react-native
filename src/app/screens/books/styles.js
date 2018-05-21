import { StyleSheet } from 'react-native';

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
    height: 40,
    width: 40
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
