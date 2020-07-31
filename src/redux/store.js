import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import dzReducer from './dzReducer';
import userReducer from './userReducer';
import jumpReducer from './jumpReducer';

const rootReducer = combineReducers({
  dzReducer,
  userReducer,
  jumpReducer
});

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));