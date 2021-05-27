import { TYPES } from '../actions/auth';
import { getToken, getUser } from '../../config/auth';

const INITIAL_STATE = {
  isAdmin: getUser().tipo === '1' || false,
  loading: false,
  token: getToken() || '',
  usuario: getUser() || {},
  error: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SIGN_LOADING:
      state.error = [];
      state.loading = action.status;
      return state;
    case TYPES.SIGN_IN:
      state.token = action.data.token;
      state.usuario = action.data.usuario;
      state.isAdmin = action.data.usuario.tipo === '1';
      state.loading = false;
      return state;
    case TYPES.SIGN_ERROR:
      const err = [...state.error, action.data];
      state.loading = false;
      state.error = err;
      return state;
    case TYPES.SIGN_OUT:
      state.token = '';
      state.usuario = {};
      state.isAdmin = false;
      state.error = [];
      return state;
    default:
      return state;
  }
};

export default reducer;
