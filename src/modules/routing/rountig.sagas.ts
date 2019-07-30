import { call, put, takeLatest, select } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { RoutePayload, ActionTypes } from './';
import { StoreState } from '../index';

function * routeSaga(action: Action<RoutePayload>): any {
	const { currentRoute } = yield select<SelectFn<StoreState>>(({ routing }: StoreState) => ({
		currentRoute: routing.currentRoute
	}));

	console.log('#'.repeat(10));
	console.log(currentRoute);
	console.log('#'.repeat(10));
}

export default function * routingRootSaga(): any {
	yield takeLatest(ActionTypes.Route, routeSaga);
}
