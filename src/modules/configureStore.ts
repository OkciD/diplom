import { applyMiddleware, createStore, Store } from 'redux';
import { rootReducer, rootSaga, StoreState } from './index';
import createSagaMiddleware from '@redux-saga/core';
import { createLogger } from 'redux-logger';

const logger = createLogger({
	colors: {
		title: false,
		prevState: false,
		action: false,
		nextState: false,
		error: false
	}
});

export default function configureStore(): Store<StoreState> {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, logger));
	sagaMiddleware.run(rootSaga);

	return store;
}
