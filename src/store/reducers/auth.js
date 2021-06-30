import { TYPES } from '../actions/auth';
import { getToken, getUser } from '../../config/auth';

const INITIAL_STATE = {
  loading: false,
  token: getToken() || '',
  user: getUser() || {},
  error: []
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TYPES.SIGN_LOADING:
      state.error = [];
      state.loading = action.status;
      return state;
    case TYPES.SIGN_IN:
      state.token = action.data.token;
      state.user = action.data.userDTO;
      state.loading = false;
      return state;
    case TYPES.SIGN_ERROR:
      const err = [...state.error, action.data];
      state.loading = false;
      state.error = err;
      return state;
    case TYPES.SIGN_OUT:
      state.token = '';
      state.user = {};
      state.error = [];
      state.loading = false;
      return state;
    default:
      return state;
  }
};

export default reducer;
