import { applyMiddleware, createStore, Store } from 'redux';
import { rootReducer, rootSaga, StoreState } from './index';
import createSagaMiddleware from '@redux-saga/core';

export default function configureStore(): Store<StoreState> {
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(rootSaga);

	return store;
}
