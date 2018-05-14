import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import filter from './filterBooks/reducer';
import book from './books/reducer';
import login from './logIn/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  book,
  filter,
  login
});

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;
