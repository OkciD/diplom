export default interface SymptomsState {
	symptomsForChosenBodyPart: Symptom[];
	selectedSymptoms: Symptom[];
}

export interface Symptom {
	id: number;
	name: string;
	bodyPartId: number;
	parentSymptomId?: number;
	isCritical: boolean;
}

export interface SetSymptomsPayload {
	symptoms: Symptom[];
}
