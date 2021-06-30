import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// reducers
import SignReducer from './reducers/auth';
import { reducer as toastrReducer } from 'react-redux-toastr'

const reducers = combineReducers({
  auth: SignReducer,
  toastr: toastrReducer,
});

// middlewares de redux
const middlewares = [thunk];

// compose junta os middlewares e ferramentas de debug
const compose = composeWithDevTools(applyMiddleware(...middlewares));

// criar a store do redux
const store = createStore(reducers, compose);

export default store;
