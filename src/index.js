import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./store"


//ReactDOM.render(<App />, document.getElementById("root"))

ReactDOM.render(
  <Provider store = {store}>
    <App />
  </Provider>, 
  document.getElementById("root"))




























/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/
reportWebVitals();

