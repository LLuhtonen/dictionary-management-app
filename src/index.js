import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from './redux/reducers';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faEdit, faSync, faCodeBranch, faClone, faBan, faArrowLeft, faLink } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools());

library.add(faTrashAlt, faEdit, faSync, faCodeBranch, faClone, faBan, faArrowLeft, faLink);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
