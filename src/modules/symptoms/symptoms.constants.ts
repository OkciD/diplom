import { SymptomsState } from './';

export const initialState: SymptomsState = {
	symptomsForChosenBodyPart: [],
	selectedSymptoms: []
};

export enum ActionTypes {
	LoadSymptoms = 'SYMPTOMS/LOAD_SYMPTOMS'
}
