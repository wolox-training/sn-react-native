import React from 'react';

import validateUser from '../../../service/account';

import LogInLayout from './layout';
import './styles.css';

class LogIn extends React.Component {
  validateLogIn = () => {
    this.showErrorMessage('password-validation', 'none');
    this.showErrorMessage('user-validation', 'none');
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;
    let validationFlag = true;
    if (!this.validatePassword(password)) {
      this.showErrorMessage('password-validation', 'block');
      validationFlag = false;
    }
    if (!this.validateEmail(user)) {
      this.showErrorMessage('user-validation', 'block');
      validationFlag = false;
    }
    if (validationFlag) {
      try {
        validateUser(user, password);
      } catch (e) {
        this.showErrorMessage('api-validation', 'block');
      }
    }
  };

  showErrorMessage = (idError, display) => (document.getElementById(idError).style.display = display);
  validatePassword = password => password.length >= 8 && password.length <= 52;
  validateEmail = email => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

  render() {
    return <LogInLayout validateLogIn={this.validateLogIn} />;
  }
}

export default LogIn;
