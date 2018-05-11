import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  filter: ''
};

function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.SET_FILTER: {
      return state.merge({ filter: action.filter });
    }
    default:
      return state;
  }
}

export default reducer;
