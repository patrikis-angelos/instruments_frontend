import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import './assets/index.css';

import App from './App';
import initialState from './redux/initialState';
import rootReducer from './redux/reducers/rootReducer';

const store = configureStore({ reducer: rootReducer, preloadedState: initialState });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
