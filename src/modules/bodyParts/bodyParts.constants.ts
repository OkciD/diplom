import { BodyPartsState } from './';

export enum MaleFrontBodyParts {
	Head = 1,
	Eyes = 2,
	Nose = 3,
	OralCavity = 4,
	Ears = 5,
	NeckOrThroat = 6,
	Chest = 8,
	UpperAbdomen = 10,
	MidAbdomen = 11,
	LowerAbdomen = 12,
	UpperArm = 13,
	Forearm = 14,
	Hand = 15,
	Thigh = 21,
	Knee = 22,
	LowerLeg = 23,
	Foot = 24,
	SexualOrgans = 25
}

export enum MaleBackBodyParts {
	Elbow = 0, // TODO: fix

	Head = 1,
	Ears = 5,
	NeckOrThroat = 6,
	NapeOfNeck = 7,
	UpperArm = 13,
	Forearm = 14,
	Hand = 15,
	Back = 17,
	Buttocks = 19,
	Anus = 20,
	Thigh = 21,
	LowerLeg = 23,
	Foot = 24,
	LowerBack = 28
}

export const initialState: BodyPartsState = {
	chosenBodyPartId: null,
	gender: 'male',
	position: 'front'
};

export enum ActionTypes {
	SetGender = 'BODY_PARTS/SET_GENDER',
	SwitchPosition = 'BODY_PARTS/SWITCH_POSITION',
	ChooseBodyPart = 'BODY_PARTS/CHOOSE_BODY_PART'
}
