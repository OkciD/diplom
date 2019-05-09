import { BodyPartsState } from './';

export const initialState: BodyPartsState = {
	selectedBodyPartId: null,
	gender: 'male',
	position: 'front'
};

export enum ActionTypes {
	SetGender = 'BODY_PARTS/SET_GENDER',
	SwitchPosition = 'BODY_PARTS/SWITCH_POSITION',
	SelectBodyPart = 'BODY_PARTS/SELECT_BODY_PART',
	UnSelectBodyPart = 'BODY_PARTS/UNSELECT_BODY_PART'
}
