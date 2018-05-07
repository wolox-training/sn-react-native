import axios from 'axios';

import { ROUTES } from '../app/config/routes';

const urlApi = 'https://wbooks-api-stage.herokuapp.com/api/v1';

export async function validateUser(user, password) {
  await axios
    .post(`${urlApi}/users/sessions`, {
      email: user,
      password
    })
    .then(res => {
      window.location.href = ROUTES.HOME();
      sessionStorage.setItem('authorizationToken', res.data.access_token);
    })
    .catch(e => {
      document.getElementById('api-validation').style.display = 'block';
      console.log(e);
    });
}

export async function getBooks() {
  const books = await axios.get(`${urlApi}/books`, {
    headers: {
      Authorization: sessionStorage.getItem('authorizationToken')
    }
  });
  return books.data;
}

export async function getBook(id) {
  const books = await axios.get(`${urlApi}/books/${id}`, {
    headers: {
      Authorization: sessionStorage.getItem('authorizationToken')
    }
  });
  return books.data;
}
