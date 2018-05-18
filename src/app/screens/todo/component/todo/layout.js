import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { SELECT, UNSELECT, REMOVE } from '../../strings';

import styles from './styles';

function TodoLayout({ todo, toggleTodo, removeTodo }) {
  return (
    <View style={styles.container}>
      <Text>{todo.name}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleTodo} style={todo.selected ? styles.selected : styles.unselected}>
          <Text style={styles.button}>{todo.selected ? UNSELECT : SELECT}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={removeTodo} style={styles.remove}>
          <Text style={styles.button}>{REMOVE}</Text>
        </TouchableOpacity>
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
