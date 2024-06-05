// redux/store.js
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';


const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated') === 'true',
  isLoading: false,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_AUTH_STATE':
      localStorage.setItem('isAuthenticated', 'true');
      return { ...state, isAuthenticated: true };
    case 'LOGOUT':
      localStorage.setItem('isAuthenticated', 'false');
      return { ...state, isAuthenticated: false };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

const store = createStore(
  authReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
