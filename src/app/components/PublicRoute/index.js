import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { ROUTES } from '../../config/routes';

function PublicRoute({ component: Component, path }) {
  return (
    <Route
      path={path}
      render={props =>
        !sessionStorage.getItem('user') ? <Component {...props} /> : <Redirect to={ROUTES.HOME()} />
      }
    />
  );
}

export default PublicRoute;

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired
};
