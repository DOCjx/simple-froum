import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import UI from './UI';

import fetch from './common/fetch';
import config from './common/config';
const {rootModel} = config;

/* eslint-disable no-underscore-dangle */
let store = createStore(
    App,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */
render(
    <Provider store={store}>
        <UI />
    </Provider>,
    document.getElementById('root')
);
const appInit = async () => {
    const articles = await fetch(`articles/${rootModel}`);
    store.dispatch({
        type:"List/LOAD",
        payload: {
            articles: articles.slice(0, 5)
        }
    });
    store.dispatch({
        type:"Page/SHOW",
        payload: articles.length
    });
};
appInit();
