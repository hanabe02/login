import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from "./redux/store";
import App from './app';

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ React 18 방식

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);