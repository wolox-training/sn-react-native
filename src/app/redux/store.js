import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import todos from './todo/reducer';

const reducers = combineReducers({
  todos
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
