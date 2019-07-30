import { symptomsSaga } from '../symptoms';
import { fork } from 'redux-saga/effects';

export default function * (): any {
	yield fork(symptomsSaga);
}
