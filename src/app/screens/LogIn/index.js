import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { actionCreators } from '../../redux/logIn/actions';
import { validateEmail, validatePassword } from '../../utils/validations';

import { userId, passwordId } from './constants';
import LogInLayout from './layout';
import './styles.css';

class LogIn extends React.Component {
  state = { emailError: false, passwordError: false };

  validateLogIn = () => {
    const user = document.getElementById(userId).value;
    const password = document.getElementById(passwordId).value;
    let validationFlag = true;
    if (!validatePassword(password)) {
      this.setState({ passwordError: true });
      validationFlag = false;
    }

    if (!validateEmail(user)) {
      this.setState({ emailError: true });
      validationFlag = false;
    }
    if (validationFlag) {
      this.props.logIn(user, password);
    }
  };

  render() {
    return (
      <LogInLayout
        validateLogIn={this.validateLogIn}
        apiError={this.props.apiError}
        emailError={this.state.emailError}
        passwordError={this.state.passwordError}
      />
    );
  }
}

LogIn.propTypes = {
  apiError: PropTypes.string.isRequired,
  logIn: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  logIn: (user, password) => dispatch(actionCreators.login(user, password))
});

const mapStateToProps = store => ({
  logged: store.login.logged,
  apiError: store.login.loginError
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
