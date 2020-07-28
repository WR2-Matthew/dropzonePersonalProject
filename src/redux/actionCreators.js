import { LOGIN_USER, REGISTER_USER, GET_DROPZONES } from './constraints';
import axios from 'axios';

export function loginUsers(email, password) {
  console.log('hit')
  const body = { email, password };
  const loggedUser = axios.post('/auth/login', body);

  return {
    type: LOGIN_USER,
    payload: {
      user: loggedUser
    }
  };
};

export function registerUsers(firstName, lastName, email, password) {
  const body = { firstName, lastName, email, password };
  const registeredUser = axios.post('/auth/register', body);
  return {
    type: REGISTER_USER,
    payload: {
      user: registeredUser
    }
  };
};

export function getDropzones() {
  const dropzones = axios.get('/api/dropzones');
  return {
    type: GET_DROPZONES,
    payload: dropzones
  };
};
