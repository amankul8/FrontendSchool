import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {applyMiddleware, compose, createStore} from "redux";
import {rootReducer} from "./redux/reducers/rootReducer";
import {Provider} from "react-redux";
import rootSaga from "./redux/sagas/rootSaga";
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
sagaMiddleware.run(rootSaga);

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(
  <React.StrictMode>
      <Router>
          {app}
      </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
