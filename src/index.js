import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import './index.css';
import App from './components/App';
import theApp from './reducers';

const store = createStore(theApp);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
