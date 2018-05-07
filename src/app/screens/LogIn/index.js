import React from 'react';
import axios from 'axios';

import LogInLayout from './layout';
import './styles.css';

class LogIn extends React.Component {
  validateLogIn = async () => {
    document.getElementById('password-validation').style.display = 'none';
    document.getElementById('user-validation').style.display = 'none';
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    let validationFlag = true;
    if (!this.validatePassword(password)) {
      document.getElementById('password-validation').style.display = 'block';
      validationFlag = false;
    }
    if (!this.validateEmail(user)) {
      document.getElementById('user-validation').style.display = 'block';
      validationFlag = false;
    }

    if (validationFlag) {
      await axios
        .post('https://wbooks-api-stage.herokuapp.com/api/v1/users/sessions', {
          email: user,
          password
        })
        .then(res => {
          if (res.status !== 404 || res.status !== 401) {
            window.location.href = '/dashboard';
            sessionStorage.setItem('user', user);
          }
        })
        .catch(e => (document.getElementById('api-validation').style.display = 'block'));
    }
  };

  validatePassword = password => password.length >= 8 && password.length <= 52;
  validateEmail = email => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

  render() {
    return <LogInLayout validateLogIn={this.validateLogIn} />;
  }
}

export default LogIn;
