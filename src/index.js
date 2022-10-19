import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {applyMiddleware, compose, createStore} from "redux";
import reducers from './redux/reducers'
import thunk from "redux-thunk";
import {Provider} from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>
);

