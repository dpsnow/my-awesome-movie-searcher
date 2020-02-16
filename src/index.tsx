import React from 'react';
import ReactDOM from 'react-dom';

import { applyMiddleware, createStore, compose } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux-setup/root-reducer';
import logger from 'redux-logger';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const devTools =
    typeof (window as any).__REDUX_DEVTOOLS_EXTENSION__ === 'undefined'
        ? (a: any) => a
        : (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(rootReducer, compose(applyMiddleware(logger), devTools));

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
