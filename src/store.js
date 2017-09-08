import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';

import rootReducer from './Reducers/index.js'

const loggerMiddleware = createLogger();

const defaultState= {
	home:{
		msg: null,
	}
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, defaultState, composeEnhancers(
    applyMiddleware(thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware,
    )));

export default store;