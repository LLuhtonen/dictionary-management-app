import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './redux/reducers';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrashAlt, faEdit, faSync, faCodeBranch, faClone, faBan } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = createStore(rootReducer);

library.add(faTrashAlt, faEdit, faSync, faCodeBranch, faClone, faBan);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
