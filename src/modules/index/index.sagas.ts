import { fork } from 'redux-saga/effects';
import { routingRootSaga } from '../routing';

export default function * (): any {
	yield fork(routingRootSaga);
}
