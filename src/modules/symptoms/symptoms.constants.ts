import { SymptomsState } from './';

export const initialState: SymptomsState = {
	symptomsForChosenBodyPart: [],
	selectedSymptoms: []
};

export enum ActionTypes {
	SetSymptoms = 'SYMPTOMS/SET_SYMPTOMS'
}
