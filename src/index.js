import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Enrollement from './dev/containers/enrollment';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './dev/reducers/index';
import { Provider } from 'react-redux'

const store = createStore(allReducers, compose(
  applyMiddleware(thunk)
));
ReactDOM.render(<Provider store={store}><Enrollement /></Provider>, document.getElementById('root'));
registerServiceWorker();
