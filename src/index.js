import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';
import UI from './UI';

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