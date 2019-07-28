import { executeSql } from '../db';
import { Symptom } from './';
import { getCommonBodyPartId } from '../bodyParts';

type RawSymptom = Symptom & {
	isCritical: 1 | null;
};

function getSymptomsByBodyPartId(bodyPartId: number): Promise<Symptom[]> {
	return executeSql<RawSymptom>(`
SELECT
	symptom.id,
	symptom.name,
	symptom.id_bodypart as bodyPartId,
	symptom.id_symptom as parentSymptomId,
	symptom.is_critical as isCritical
FROM symptom
INNER JOIN bodypart ON symptom.id_bodypart = bodypart.id
WHERE
	symptom.id_bodypart = ${bodyPartId}
`)
	.then<Symptom[]>((rawSymptoms: RawSymptom[]) => rawSymptoms.map((rawSymptom: RawSymptom) => ({
		...rawSymptom,
		isCritical: Boolean(rawSymptom.isCritical)
	})));
}

// TODO: comment
export async function getSymptomsForBodyPart(bodyPartId: number): Promise<Symptom[]> {
	const symptomsForConcreteBodyPart: Symptom[] = await getSymptomsByBodyPartId(bodyPartId);
	const commonBodyPartId: number | null = await getCommonBodyPartId(bodyPartId);

	if (!commonBodyPartId) {
		return symptomsForConcreteBodyPart;
	}

	const symptomsForCommonBodyPart: Symptom[] = await getSymptomsByBodyPartId(commonBodyPartId);

	return [
		...symptomsForConcreteBodyPart,
		...symptomsForCommonBodyPart
	];
}
