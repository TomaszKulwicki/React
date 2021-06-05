import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main/main';
import { Provider } from 'react-redux';
import store from './tools/store';

ReactDOM.render(
    <Provider store={store}>
        <Main/>
    </Provider>,
document.getElementById('root')
);