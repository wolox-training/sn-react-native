import React from 'react';

import { validateUser } from '../../../service/service';
import { showErrorMessage, validateEmail, validatePassword } from '../../utils/validations';

import { userId, passwordId, passwordValidationId, userValidationId, apiValidationId } from './constants';
import LogInLayout from './layout';
import './styles.css';

class LogIn extends React.Component {
  validateLogIn = () => {
    showErrorMessage('password-validation', 'none');
    showErrorMessage('user-validation', 'none');
    showErrorMessage('api-validation', 'none');
    const user = document.getElementById(userId).value;
    const password = document.getElementById(passwordId).value;
    let validationFlag = true;
    if (!validatePassword(password)) {
      showErrorMessage(passwordValidationId, 'block');
      validationFlag = false;
    }
    if (!validateEmail(user)) {
      showErrorMessage(userValidationId, 'block');
      validationFlag = false;
    }
    if (validationFlag) {
      try {
        validateUser(user, password);
      } catch (e) {
        showErrorMessage(apiValidationId, 'block');
      }
    }
  };

  render() {
    return <LogInLayout validateLogIn={this.validateLogIn} />;
  }
}

export default LogIn;
