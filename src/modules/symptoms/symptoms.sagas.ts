import { call, put, select, takeLatest, putResolve } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { LoadSymptomsPayload } from './';

function * loadSymptomsSaga(action: Action<LoadSymptomsPayload>): any {
	const { chosenBodyPartId } = action.payload!;
}
