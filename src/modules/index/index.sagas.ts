import { fork } from 'redux-saga/effects';
import { routingRootSaga } from '../routing';
import { bodyPartsRootSaga } from '../bodyParts';

export default function * (): any {
	yield fork(routingRootSaga);
	yield fork(bodyPartsRootSaga);
}
