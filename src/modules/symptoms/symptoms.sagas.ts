import { call, put, takeLatest } from 'redux-saga/effects';
import { Action } from 'redux-actions';
import { ActionTypes, getSymptomsByBodyPartId, LoadSymptomsPayload, setSymptomsAction, Symptom } from './';
import { getCommonBodyPartId } from '../bodyParts';

/**
 * Кладёт в стейт симптомы для переданной части тела, а так же, если у неё есть "общая" часть тела,
 * приклеивает к списку сипмтомы и для неё
 */
function * loadSymptomsSaga(action: Action<LoadSymptomsPayload>): any {
	const { chosenBodyPartId } = action.payload!;
	const symptomsForConcreteBodyPart: Symptom[] = yield call(getSymptomsByBodyPartId, chosenBodyPartId);
	const commonBodyPartId: number | null = yield call(getCommonBodyPartId, chosenBodyPartId);

	if (!commonBodyPartId) {
		return put(setSymptomsAction({ symptoms: symptomsForConcreteBodyPart }));
	}

	const symptomsForCommonBodyPart: Symptom[] = yield call(getSymptomsByBodyPartId, commonBodyPartId);

	yield put(setSymptomsAction({
		symptoms: [
			...symptomsForConcreteBodyPart,
			...symptomsForCommonBodyPart
		]
	}));
}

export default function * symptomsRootSaga(): any {
	yield takeLatest(ActionTypes.LoadSymptoms, loadSymptomsSaga);
}
