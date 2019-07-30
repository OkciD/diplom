import { call, put } from 'redux-saga/effects';
import { getSymptomsByBodyPartId, setSymptomsAction, Symptom } from './';
import { getCommonBodyPartId } from '../bodyParts';

/**
 * Кладёт в стейт симптомы для переданной части тела, а так же, если у неё есть "общая" часть тела,
 * приклеивает к списку сипмтомы и для неё
 */
export function * loadSymptomsSaga(chosenBodyPartId: number): any {
	const symptomsForConcreteBodyPart: Symptom[] = yield call(getSymptomsByBodyPartId, chosenBodyPartId);
	const commonBodyPartId: number | null = yield call(getCommonBodyPartId, chosenBodyPartId);

	if (!commonBodyPartId) {
		yield put(setSymptomsAction({ symptoms: symptomsForConcreteBodyPart }));
		return;
	}

	const symptomsForCommonBodyPart: Symptom[] = yield call(getSymptomsByBodyPartId, commonBodyPartId);

	yield put(setSymptomsAction({
		symptoms: [
			...symptomsForConcreteBodyPart,
			...symptomsForCommonBodyPart
		]
	}));
}
