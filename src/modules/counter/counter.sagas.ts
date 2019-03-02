import { Action } from 'redux-actions';
import { select, call, put, takeLatest } from 'redux-saga/effects';
import { ActionTypes, CounterState, setCounterAction } from './';

function performOperation(counter: number, type: 'inc' | 'dec'): Promise<number> {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(counter + ((type === 'inc') ?  1 : - 1));
		}, 1000);
	});
}

function * operationSaga(action: Action<void>): unknown {
	const counter: number = yield select<SelectFn<CounterState>>(({ counter }) => counter);

	const newCounter: number = yield call(
		performOperation,
		counter,
		(action.type === ActionTypes.Inc) ? 'inc' : 'dec'
	);

	yield put(setCounterAction({ counter: newCounter }));
}

export default function * counterRootSaga(): any {
	yield takeLatest(ActionTypes.Inc, operationSaga);
	yield takeLatest(ActionTypes.Dec, operationSaga);
}
