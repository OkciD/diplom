import { fork } from 'redux-saga/effects';
import { symptomsSaga } from '../symptoms';
import { routingRootSaga } from '../routing';

export default function * (): any {
	yield fork(routingRootSaga);
	yield fork(symptomsSaga);
}
