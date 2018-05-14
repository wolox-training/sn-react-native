import axios from 'axios';

import { getAuthorizationToken } from '../app/utils/sessionStorage';
import { actionCreators } from '../app/redux/logIn/actions';

const urlApi = 'https://wbooks-api-stage.herokuapp.com/api/v1';

export const login = async (user, password) =>
  axios.post(`${urlApi}/users/sessions`, {
    email: user,
    password
  });

// .then(res => {
//   console.log('Success');
//   actionCreators.getUsersSuccess();
//   setAuthorizationToken(res.data.access_token);
// })
// .catch(e => console.log('Fail'), actionCreators.getUsersFailure());

export async function getBooks() {
  const books = await axios.get(`${urlApi}/books`, {
    headers: {
      Authorization: getAuthorizationToken()
    }
  });
  return books;
}

export async function getBook(id) {
  const books = await axios.get(`${urlApi}/books/${id}`, {
    headers: {
      Authorization: getAuthorizationToken()
    }
  });
  return books.data;
}
