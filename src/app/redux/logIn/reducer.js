import Immutable from 'seamless-immutable';

import { actions } from './actions';

const defaultState = {
  logged: false,
  loginError: null
};

function reducer(state = Immutable(defaultState), action) {
  switch (action.type) {
    case actions.LOGIN_SUCCESS: {
      return state.merge({ logged: true, loginError: null });
    }
    case actions.LOGIN_FAILURE: {
      return state.merge({ logged: false, loginError: action.payload });
    }
    default:
      return state;
  }
}

export default reducer;
