import { call, put } from 'redux-saga/effects';
import { getSymptomsByBodyPartId, setSymptomsAction, Symptom } from './';
import { getCommonBodyPartId } from '../bodyParts';
import sortByKey from '../../utils/sortByKey';

/**
 * Кладёт в стейт симптомы для переданной части тела, а так же, если у неё есть "общая" часть тела,
 * приклеивает к списку сипмтомы и для неё
 */
export function * loadSymptomsSaga(chosenBodyPartId: number): any {
	const symptomsForConcreteBodyPart: Symptom[] = yield call(getSymptomsByBodyPartId, chosenBodyPartId);
	const commonBodyPartId: number | null = yield call(getCommonBodyPartId, chosenBodyPartId);
	let result: Symptom[] = symptomsForConcreteBodyPart;

	if (commonBodyPartId) {
		const symptomsForCommonBodyPart: Symptom[] = yield call(getSymptomsByBodyPartId, commonBodyPartId);
		result = [
			...result,
			...symptomsForCommonBodyPart
		];
	}

	const criticalSymptoms: Symptom[] = result.filter(({ isCritical }) => isCritical);
	const nonCriticalSymptoms: Symptom[] = result.filter(({ isCritical }) => !isCritical);

	result = [
		...sortByKey<Symptom>(criticalSymptoms, 'name'),
		...sortByKey<Symptom>(nonCriticalSymptoms, 'name')
	];

	yield put(setSymptomsAction({ symptoms: result }));
}
