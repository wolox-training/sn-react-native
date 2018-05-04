import React from 'react';

import LogInLayout from './layout';
import './styles.css';

class LogIn extends React.Component {
  validateLogIn = () => {
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
      sessionStorage.setItem('user', user);
      window.location.href = '/dashboard';
    }
  };

  validatePassword = password => password.length > 8 && password.length < 52;
  validateEmail = email => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email);

  render() {
    return <LogInLayout validateLogIn={this.validateLogIn} />;
  }
}

export default LogIn;
