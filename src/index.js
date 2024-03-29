import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "./store"
import 'styles/global.scss';
import reportWebVitals from './reportWebVitals';
import Routes from './routes'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

ReactDOM.render(
    <Provider store={store}>
      <Routes />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
