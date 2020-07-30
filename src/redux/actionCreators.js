import { LOGIN_USER, REGISTER_USER, GET_DROPZONES, GET_SESSION, LOGOUT_USER, RATE_DZ } from './constraints';
import axios from 'axios';

export function loginUsers(email, password) {
  const body = { email, password };
  const loggedUser = axios.post('/auth/login', body);
  return {
    type: LOGIN_USER,
    payload: loggedUser
  };
};

export function registerUsers(firstName, lastName, email, password) {
  const body = { firstName, lastName, email, password };
  const registeredUser = axios.post('/auth/register', body);
  return {
    type: REGISTER_USER,
    payload: registeredUser
  };
};

export function getUser() {
  const getSession = axios.get('/auth/session');
  return {
    type: GET_SESSION,
    payload: getSession
  };
};

export function logoutUser() {
  const logout = axios.post('/auth/logout');
  console.log(logout)
  return {
    type: LOGOUT_USER,
    payload: logout
  };
};

export function getDropzones() {
  const dropzones = axios.get('/api/dropzones');
  return {
    type: GET_DROPZONES,
    payload: dropzones
  };
};

export function rateDropzones(bunkhouse, camping, facilities, inclusion, landingArea, party, rental, planes, skySafety, userId, dropzoneId) {
  const body = { bunkhouse, camping, facilities, inclusion, landingArea, party, rental, planes, skySafety };
  const ratings = axios.post(`/api/rate/dropzone?dropzone=${dropzoneId}&user=${userId}`, body);
  return {
    type: RATE_DZ,
    payload: ratings
  }
};
