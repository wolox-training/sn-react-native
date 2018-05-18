import { StyleSheet } from 'react-native';

const red = '#E3342F';
const green = '#38C172';
const purple = '#9561E2';
const white = '#FFF';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  button: {
    alignItems: 'center',
    color: white,
    padding: 5
  },
  selected: {
    backgroundColor: purple
  },
  unselected: {
    backgroundColor: green
  },
  remove: {
    backgroundColor: red
  },
  buttonContainer: {
    flexDirection: 'row'
  }
});

export default styles;
