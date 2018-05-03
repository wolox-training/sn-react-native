import React from 'react';

import './styles.css';

import wbooks from '../../../assets/ASSETS/wbooks_logo.svg';

import { logIn } from './strings';

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
      window.location.href = '/dashboard';
    }
  };

  validatePassword = password => password.length > 8 && password.length < 52;
  validateEmail = email => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  render() {
    return (
      <div className="log-in-container">
        <img className="log-in-logo" src={wbooks} alt="wbooks_logo" />
        <div className="log-in-inputs">
          <input className="log-in-texts" id="user" type="text" placeholder="Email" />
          <h2 id="user-validation" className="log-in-alerts">
            Usuario no valido
          </h2>
        </div>
        <div className="log-in-inputs">
          <input className="log-in-texts" id="password" type="password" placeholder="Password" />
          <h2 id="password-validation" className="log-in-alerts">
            Contraseña no valida
          </h2>
        </div>
        <button onClick={this.validateLogIn} className="log-in-button">
          {logIn}
        </button>
      </div>
    );
  }
}

export default LogIn;
