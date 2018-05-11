import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  books: []
};

function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.GET_BOOKS_SUCCESS: {
      return state.merge({ books: action.books });
    }
    default:
      return state;
  }
}

export default reducer;
