import axios from 'axios';

import { ROUTES } from '../app/config/routes';

async function validateUser(user, password) {
  await axios
    .post('https://wbooks-api-stage.herokuapp.com/api/v1/users/sessions', {
      email: user,
      password
    })
    .then(res => {
      console.log(res);
      window.location.href = ROUTES.HOME();
      sessionStorage.setItem('user', user);
    });
}

export default validateUser;
