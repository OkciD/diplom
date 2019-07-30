import { call, put, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { ActionTypes, getSymptomsForBodyPart, LoadSymptomsPayload, setSymptomsAction, Symptom } from './';

function * loadSymptomsSaga(action: Action<LoadSymptomsPayload>): any {
	const { chosenBodyPartId } = action.payload!;
	const symptoms: Symptom[] = yield call(getSymptomsForBodyPart, chosenBodyPartId);

	yield put(setSymptomsAction({ symptoms }));
}

export default function * symptomsRootSaga(): any {
	yield takeLatest(ActionTypes.LoadSymptoms, loadSymptomsSaga);
}
