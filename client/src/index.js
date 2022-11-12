import React from 'react';
import {createRoot} from 'react-dom/client'
import { Provider } from 'react-redux';
import { legacy_createStore as createStore, applyMiddleware, compose} from 'redux' //{legacy_createStore as createStore, applyMiddleware, compose}
import thunk from 'redux-thunk';
import './index.css'

import reducers from './reducers';

import App from './App';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

//after(react 18 (latest))
//import import { createRoot } from 'react-dom/client';
const container =document.getElementById('root');
const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>);
//before(react 17)
// import { render } from 'react-dom';
// const container = document.getElementById('app');
// render(<App />, container);

//or
//before(react 17)
// import ReactDom from 'react-dom';
// const container = document.getElementById('app');
// ReactDom.render(<App />, container);