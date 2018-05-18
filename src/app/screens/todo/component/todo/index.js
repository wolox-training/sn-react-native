import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { actionCreators } from '../../../../redux/todo/actions';

import TodoLayout from './layout';

function Todo({ todo, toggleTodo, removeTodo }) {
  return <TodoLayout todo={todo} toggleTodo={toggleTodo} removeTodo={removeTodo} />;
}

Todo.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired,
  toggleTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleTodo: () => dispatch(actionCreators.toggleTodo(ownProps.todo.id)),
  removeTodo: () => dispatch(actionCreators.removeTodo(ownProps.todo.id))
});

export default connect(() => ({}), mapDispatchToProps)(Todo);
