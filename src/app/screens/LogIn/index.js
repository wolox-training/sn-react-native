import React from 'react';

import { validateUser } from '../../../service/service';

import { userId, passwordId, passwordValidationId, userValidationId, apiValidationId } from './constants';
import LogInLayout from './layout';
import './styles.css';

class LogIn extends React.Component {
  validateLogIn = () => {
    this.showErrorMessage('password-validation', 'none');
    this.showErrorMessage('user-validation', 'none');
    this.showErrorMessage('api-validation', 'none');
    const user = document.getElementById(userId).value;
    const password = document.getElementById(passwordId).value;
    let validationFlag = true;
    if (!this.validatePassword(password)) {
      this.showErrorMessage(passwordValidationId, 'block');
      validationFlag = false;
    }
    if (!this.validateEmail(user)) {
      this.showErrorMessage(userValidationId, 'block');
      validationFlag = false;
    }
    if (validationFlag) {
      try {
        validateUser(user, password);
      } catch (e) {
        console.log(e);
        this.showErrorMessage(apiValidationId, 'block');
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
