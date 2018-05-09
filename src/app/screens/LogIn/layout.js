import React from 'react';
import PropTypes from 'prop-types';

import wbooks from '../../../assets/ASSETS/wbooks_logo.svg';

import { logIn, userNotValid, passwordNotvalid, apiNotValid, email, password } from './strings';

function LogInLayout({ validateLogIn }) {
  return (
    <div className="log-in-container">
      <img className="log-in-logo" src={wbooks} alt="wbooks_logo" />
      <div className="log-in-inputs">
        <input className="log-in-texts" id="user" type="text" placeholder={email} />
        <h2 id="user-validation" className="log-in-alerts">
          {userNotValid}
        </h2>
      </div>
      <div className="log-in-inputs">
        <input className="log-in-texts" id="password" type="password" placeholder={password} />
        <h2 id="password-validation" className="log-in-alerts">
          {passwordNotvalid}
        </h2>
      </div>
      <button onClick={validateLogIn} className="log-in-button">
        {logIn}
      </button>
      <h2 id="api-validation" className="log-in-alerts">
        {apiNotValid}
      </h2>
    </div>
  );
}

LogInLayout.propTypes = {
  validateLogIn: PropTypes.func.isRequired
};

export default LogInLayout;
