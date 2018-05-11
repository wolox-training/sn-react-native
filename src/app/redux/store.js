import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import filter from './filterBooks/reducer';
import book from './books/reducer';

const reducers = combineReducers({
  book,
  filter
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
