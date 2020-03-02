import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { rootReducer } from './redux-setup/root-reducer';
import { rootSaga } from './redux-setup/root-saga';

const sagaMiddleware = createSagaMiddleware();

// const store = createStore(rootReducer, undefined, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));
const store = createStore(rootReducer, undefined, applyMiddleware(sagaMiddleware, logger));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
