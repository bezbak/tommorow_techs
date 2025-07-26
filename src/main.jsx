import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './states/store.js'
import { BrowserRouter } from 'react-router-dom'
import './modificator.scss'
import './index.scss'

const rootElement = document.getElementById('root');

ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootElement
);