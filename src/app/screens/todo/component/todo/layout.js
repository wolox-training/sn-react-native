import React from 'react';
import { View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function TodoLayout({ todo, toggleTodo, removeTodo }) {
  return (
    <View style={styles.container}>
      <Text>{todo.name}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title={todo.selected ? 'UnSelect' : 'Select'}
          onPress={toggleTodo}
          style={todo.selected ? styles.selected : styles.unselected}
        />
        <Button title="REMOVE" color="red" onPress={removeTodo} />
      </View>
    </View>
  );
}

TodoLayout.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

export default TodoLayout;
