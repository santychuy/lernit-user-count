import 'modern-normalize';
import React from 'react';
import ReactDOM from 'react-dom';

import './config/firebase';
import App from './App';
import { GlobalStyle } from './globalStyles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
