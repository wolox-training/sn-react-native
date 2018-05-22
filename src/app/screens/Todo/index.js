import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { TextInput, ScrollView, Button } from 'react-native';
import PropTypes from 'prop-types';

import { actionCreators } from '../../redux/todo/actions';

import { ENTER_TODO, REMOVE_SELECTED_TODO } from './strings';
import Todo from './component/Todo';

function TodoContainer({ addTodo, todos, removeSelectedTodo }) {
  return (
    <Fragment>
      <TextInput onSubmitEditing={addTodo} placeholder={ENTER_TODO} />
      <ScrollView>{todos.map(todo => <Todo key={todo.id} todo={todo} />)}</ScrollView>
      <Button onPress={removeSelectedTodo} title={REMOVE_SELECTED_TODO} />
    </Fragment>
  );
}

const mapStateToProps = store => ({
  todos: store.todos.todos
});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(actionCreators.addTodo(text.nativeEvent.text)),
  removeSelectedTodo: () => dispatch(actionCreators.removeSelectedTodo())
});

TodoContainer.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      selected: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeSelectedTodo: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
