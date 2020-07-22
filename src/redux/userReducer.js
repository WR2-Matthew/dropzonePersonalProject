import { LOGIN_USER, REGISTER_USER } from './constraints';

const initialState = {
  user: {}
}

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER + '_PENDING':
      return state;
    case LOGIN_USER + '_FULFILLED':
      return Object.assign({}, state, payload)
    case LOGIN_USER + '_REJECTED':
      return state;
    case REGISTER_USER + '_PENDING':
      return state;
    case REGISTER_USER + '_FULFILLED':
      return Object.assign({}, state, payload);
    case REGISTER_USER + 'REJECTED':
      return state;
    default:
      return state;
  }
};