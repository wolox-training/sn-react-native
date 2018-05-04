import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { ROUTES } from '../../config/routes';

function PrivateRoute({ component: Component, path }) {
  return (
    <Route
      path={path}
      render={props =>
        sessionStorage.getItem('user') ? <Component {...props} /> : <Redirect to={ROUTES.LOG_IN()} />
      }
    />
  );
}

export default PrivateRoute;

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};
