import axios from 'axios';

import { ROUTES } from '../app/config/routes';
import { getAuthorizationToken, setAuthorizationToken } from '../app/utils/sessionStorage';

const urlApi = 'https://wbooks-api-stage.herokuapp.com/api/v1';

export async function validateUser(user, password) {
  await axios
    .post(`${urlApi}/users/sessions`, {
      email: user,
      password
    })
    .then(res => {
      window.location.href = ROUTES.HOME();
      setAuthorizationToken(res.data.access_token);
    })
    .catch((document.getElementById('api-validation').style.display = 'block'));
}

export async function getBooks() {
  const books = await axios.get(`${urlApi}/books`, {
    headers: {
      Authorization: getAuthorizationToken()
    }
  });
  return books.data;
}

export async function getBook(id) {
  const books = await axios.get(`${urlApi}/books/${id}`, {
    headers: {
      Authorization: getAuthorizationToken()
    }
  });
  return books.data;
}
