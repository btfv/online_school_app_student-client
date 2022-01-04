import config from '../../config';
import handleResponse from './handleResponse';
import { handleLoginResponse } from './handleResponse';
export const userService = {
  login,
  logout,
  changePassword,
  signup,
};

function login(value) {
  const username = value.username;
  const password = value.password;
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    mode: 'cors',
    credentials: 'include',
    body: JSON.stringify({ username, password }),
  };
  return fetch(config.API_URL + '/auth/studentLogin', requestOptions)
    .then(handleLoginResponse)
    .then((user) => {
      localStorage.setItem('user', JSON.stringify(user));
      return user;
    });
}

function logout() {
  localStorage.removeItem('user');
  const requestOptions = {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
  };
  let reqUrl = '/api/logout';
  fetch(config.API_URL + reqUrl, requestOptions).then(handleResponse);
  window.location.reload();
}

function changePassword(value) {
  const { oldPassword, newPassword } = value;
  const reqBody = JSON.stringify({ oldPassword, newPassword });
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    mode: 'cors',
    credentials: 'include',
    body: reqBody,
  };
  const reqUrl = config.API_URL + '/auth/changePassword';
  return fetch(reqUrl, requestOptions).then(handleResponse);
}

function signup(value) {
  const { username, password, email, firstname, lastname, age } = value;
  const reqBody = JSON.stringify({
    username,
    password,
    email,
    firstname,
    lastname,
    age,
  });
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    mode: 'cors',
    credentials: 'include',
    body: reqBody,
  };
  const reqUrl = config.API_URL + '/auth/studentRegistration';
  return fetch(reqUrl, requestOptions).then(handleResponse);
}
