import { removeToken, saveAuth } from '../../config/auth';
import authService from '../../services/auth.service';
import history from '../../config/history';
import http from '../../config/http';
import { toastr } from 'react-redux-toastr';

export const TYPES = {
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  SIGN_ERROR: 'SIGN_ERROR',
  SIGN_LOADING: 'SIGN_LOADING',
};

export const signInAction = (data) => {
  return async (dispatch) => {
    dispatch({ type: TYPES.SIGN_LOADING, status: true });

    try {
      const result = await authService(data);
      if (result.data) {
        saveAuth(result.data?.data);
        http.defaults.headers.token = result.data.data.token;
      }
      dispatch({
        type: TYPES.SIGN_IN,
        data: result.data?.data,
      });
      history.push('/');
      toastr.success('Login', 'Login realizado com sucesso!');
    } catch (error) {
      dispatch({ type: TYPES.SIGN_ERROR, data: error });
      toastr.error('Login', 'Usuário ou senha inválidos ou sua conta está inativa.');
    }
  };
};

export const logoutAction = (data) => {
  return async (dispatch) => {
    removeToken();
    dispatch({ type: TYPES.SIGN_OUT });
    history.push('/login');
  };
};