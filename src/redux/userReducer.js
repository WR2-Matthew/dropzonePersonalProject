import { LOGIN_USER, REGISTER_USER, GET_SESSION, LOGOUT_USER } from './constraints';

const initialState = {
  user: {}
}

export default function userReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_USER + '_PENDING':
      return state;
    case LOGIN_USER + '_FULFILLED':
      return { ...state, user: payload }
    case LOGIN_USER + '_REJECTED':
      return state;
    case REGISTER_USER + '_PENDING':
      return state;
    case REGISTER_USER + '_FULFILLED':
      return { ...state, user: payload }
    case REGISTER_USER + 'REJECTED':
      return state;
    case GET_SESSION + '_PENDING':
      return state;
    case GET_SESSION + '_FULFILLED':
      return { ...state, user: payload }
    case GET_SESSION + '_REJECTED':
      return state;
    case LOGOUT_USER + '_PENDING':
      return state;
    case LOGOUT_USER + '_FULFILLED':
      return { ...state, user: initialState }
    case LOGOUT_USER + '_REJECTED':
      return state;
    default:
      return state;
  }
};