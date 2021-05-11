// Libraries
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

// Reducers
import { reducer as toastrReducer } from 'react-redux-toastr'
import SignReducer from './auth/auth.reducer'

const reducers = combineReducers({
  auth: SignReducer,
  toastr: toastrReducer,
})

// Redux middlewares
const middlewares = [thunk]

// Middlewares with debug tools
const compose = composeWithDevTools(applyMiddleware(...middlewares))

// Create redux store
const store = createStore(reducers, compose)

export default store
