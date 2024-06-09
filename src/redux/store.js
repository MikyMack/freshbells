// redux/store.js
import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import cartReducer from './cartSlice';
import productReducer from './productSlice';

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
      console.log('SET_LOADING action dispatched with payload:', action.payload);
      return { ...state, isLoading: action.payload };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  product:productReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
