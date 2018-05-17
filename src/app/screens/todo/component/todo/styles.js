import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5
  },
  selected: {
    backgroundColor: 'yellow'
  },
  unselected: {
    backgroundColor: 'green'
  },
  buttonContainer: {
    flexDirection: 'row'
  }
});

export default styles;
