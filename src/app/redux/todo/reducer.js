import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  todos: [],
  lastId: 0
};

function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.ADD_TODO: {
      return state.merge({
        lastId: state.lastId + 1,
        todos: [
          ...state.todos,
          {
            name: action.payload,
            selected: false,
            id: state.lastId
          }
        ]
      });
    }
    case actions.REMOVE_TODO: {
      return state.merge({
        todos: state.todos.filter(todo => todo.id !== action.payload)
      });
    }
    case actions.REMOVE_SELECTED_TODO: {
      return state.merge({
        todos: state.todos.filter(todo => !todo.selected)
      });
    }
    case actions.TOGGLE_TODO: {
      return state.merge({
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return { ...todo, selected: !todo.selected };
          }
          return todo;
        })
      });
    }
    default:
      return state;
  }
}

export default reducer;
