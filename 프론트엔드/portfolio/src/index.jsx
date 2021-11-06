import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './store/index'

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

