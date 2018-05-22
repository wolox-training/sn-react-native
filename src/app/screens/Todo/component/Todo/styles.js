import { StyleSheet } from 'react-native';

import { red, white, green, purple } from '../../../../constants/colors';

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
