import { removeToken, saveAuth } from '../../config/auth';
import authService from '../../services/auth';
import history from '../../config/history';
import http from '../../config/http';
import { toastr } from 'react-redux-toastr';

export const TYPES = {
  SIGN_IN: 'SIGN_IN',
  SIGN_OUT: 'SIGN_OUT',
  SIGN_UP: 'SIGN_UP',
  SIGN_LOADING: 'SIGN_LOADING',
};

export const signInAction = (data) => async (dispatch) => {
  dispatch({ type: TYPES.SIGN_LOADING, status: true });

  try {
    const result = await authService(data);
    console.log(result.data.data);
    if (result.data) {
      saveAuth(result.data?.data);
      http.defaults.headers.token = result.data.data.token;
    }
    dispatch({
      type: TYPES.SIGN_IN,
      data: result.data?.data
    });
    history.push('/');
    toastr.success('Login', 'Login realizado com sucesso!');
  } catch (error) {
    dispatch({ type: TYPES.SIGN_OUT });
    toastr.error('Login', 'Usuário ou senha inválidos.');
  }
};

export const logoutAction = (data) => async (dispatch) => {
  removeToken();
  dispatch({ type: TYPES.SIGN_OUT });
  history.push('/login');
};