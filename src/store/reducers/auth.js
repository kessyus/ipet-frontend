import { TYPES } from '../actions/auth';
import { getToken, getUser } from '../../config/auth';

const INITIAL_STATE = {
  loading: false,
  token: getToken() || '',
  usuario: getUser() || {},
  error: [],
  registered: false
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SIGN_LOADING:
      state.error = [];
      state.loading = action.status;
      return state;
    case TYPES.SIGN_IN:
      state.token = action.data.token;
      state.usuario = action.data.userDTO;
      state.loading = false;
      return state;
    case TYPES.SIGN_UP:
      state.registered = true
      state.token = action.data.token
      state.usuario = action.data.userDTO
      state.loading = false
      return state
    case TYPES.SIGN_OUT:
      state.token = '';
      state.usuario = {};
      state.error = [];
      state.loading = false;
      return state;
    default:
      return state;
  }
};

export default reducer;
