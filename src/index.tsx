import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios, { AxiosRequestConfig } from 'axios';


// Add a request interceptor
axios.interceptors.request.use(function (config: AxiosRequestConfig) {
  // Do something before request is sent
  console.log('req', config);
  return {
    ...config,
    headers: {
      ...config.headers,
      'Authorization': 'bearer pippo'
    }
  };
}, function (error: any) {
  // Do something with request error
  return Promise.reject(error);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
