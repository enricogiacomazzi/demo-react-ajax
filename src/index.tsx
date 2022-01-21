import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios, { AxiosRequestConfig } from 'axios';
import { QueryClient, QueryClientProvider } from 'react-query';


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

const queryClient = new QueryClient();

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
     </QueryClientProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
