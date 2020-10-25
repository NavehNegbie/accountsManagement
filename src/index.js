import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import './index.css';
import { rootReducer } from './redux/reducers';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
);
