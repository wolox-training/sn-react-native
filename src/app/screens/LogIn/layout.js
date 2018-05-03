import React from 'react';

import wbooks from '../../../assets/ASSETS/wbooks_logo.svg';

import { logIn, userNotValid, passwordNotvalid } from './strings';

function LogInLayout() {
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

export default LogInLayout;
