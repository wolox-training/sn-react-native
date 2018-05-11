import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import book from './books/reducer';

const reducers = combineReducers({
  book
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
