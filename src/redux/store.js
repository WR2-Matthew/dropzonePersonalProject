import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import dzReducer from './dzReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  dzReducer,
  userReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));