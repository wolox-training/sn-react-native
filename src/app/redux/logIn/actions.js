import { login } from '../../../service/service';
import { ROUTES } from '../../config/routes';
import { setAuthorizationToken } from '../../../app/utils/sessionStorage';

export const actions = {
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS'
};

export const actionCreators = {
  loginSuccess(accessToken) {
    setAuthorizationToken(accessToken);
    window.location.href = ROUTES.HOME();
    return { type: actions.LOGIN_SUCCESS };
  },
  loginFailure(error) {
    return {
      type: actions.LOGIN_FAILURE,
      payload: error
    };
  },
  login(email, password) {
    return async dispatch => {
      try {
        const response = await login(email, password);
        if (response.status === 200) {
          dispatch(actionCreators.loginSuccess(response.data.access_token));
        } else {
          dispatch(actionCreators.loginFailure('ERROR'));
        }
      } catch (error) {
        dispatch(actionCreators.loginFailure(error.message));
      }
    };
  }
};
