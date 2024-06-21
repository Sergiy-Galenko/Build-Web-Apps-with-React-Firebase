import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AutheContextProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AutheContextProvider>
        <App />
      </AutheContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
