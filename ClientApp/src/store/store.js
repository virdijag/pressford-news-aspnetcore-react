import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {rootReducers } from '../reducers/articleReducers';
import rootReducder from '../reducers';

const configureStore = () => applyMiddleware(thunk)(createStore)(rootReducder);

export default configureStore;