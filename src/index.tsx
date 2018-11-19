import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";
import store from "./store/index";
import App from './components/App';
import 'antd/dist/antd.css';

ReactDOM.render (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
,
  document.getElementById("root")
);