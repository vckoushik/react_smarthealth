import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';
import {store} from "./redux/store";
import App from './App';
import { SpeedInsights } from "@vercel/speed-insights/react"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <ToastContainer/>
      <SpeedInsights/>
      <App />
    </BrowserRouter>
  </Provider>
);

