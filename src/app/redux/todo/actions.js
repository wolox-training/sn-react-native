export const actions = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_SELECTED_TODO: 'REMOVE_SELECTED_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO'
};

export const actionCreators = {
  addTodo(todoName) {
    return {
      type: actions.ADD_TODO,
      payload: todoName
    };
  },
  removeTodo: id => ({
    type: actions.REMOVE_TODO,
    payload: id
  }),
  removeSelectedTodo() {
    return {
      type: actions.REMOVE_SELECTED_TODO
    };
  },
  toggleTodo: id => ({
    type: actions.TOGGLE_TODO,
    payload: id
  })
};
