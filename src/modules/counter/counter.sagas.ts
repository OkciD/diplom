import { Action } from 'redux-actions';
import { select, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, setCounterAction } from './';
import { StoreState } from '../index';
import { getLastValue, insertCount, reset } from './db';

function * operationSaga(action: Action<void>): unknown {
	const counter: number = yield select<SelectFn<StoreState>>(({ counter }) => counter.counter);

	const newCounter: number = yield call(
		insertCount,
		(action.type === ActionTypes.Inc) ? 'inc' : 'dec',
		counter + ((action.type === ActionTypes.Inc) ? 1 : -1)
	);

	yield put(setCounterAction({ counter: newCounter }));
}

function * resetSaga(): unknown {
	yield call(reset);
	yield call(counterInitSaga);
}

function * counterInitSaga(): unknown {
	const latestValue: number = yield call(getLastValue);

	yield put(setCounterAction({ counter: latestValue }));
}

export default function * counterRootSaga(): any {
	yield call(counterInitSaga);
	yield takeLatest(ActionTypes.Inc, operationSaga);
	yield takeLatest(ActionTypes.Dec, operationSaga);
	yield takeLatest(ActionTypes.Reset, resetSaga);
}
