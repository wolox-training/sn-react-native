import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { ROUTES } from '../../config/routes';

function PrivateRoute({ component: Component, path }) {
  return (
    <Route
      path={path}
      render={props =>
        sessionStorage.getItem('authorizationToken') ? (
          <Component {...props} />
        ) : (
          <Redirect to={ROUTES.LOG_IN()} />
        )
      }
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};

export default PrivateRoute;
