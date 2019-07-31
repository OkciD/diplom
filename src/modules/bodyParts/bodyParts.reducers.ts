import {
	ActionTypes,
	initialState,
	BodyPartsState,
	SetGenderPayload,
	ChooseBodyPartPayload,
	SetChosenBodyPartNamePayload
} from './';
import { Action, handleActions } from 'redux-actions';

function setGenderReducer(state: BodyPartsState, action: Action<SetGenderPayload>): BodyPartsState {
	return {
		...state,
		gender: action.payload!.gender
	};
}

function switchPositionReducer(state: BodyPartsState): BodyPartsState {
	return {
		...state,
		position: (state.position === 'front') ? 'back' : 'front'
	};
}

function chooseBodyPartReducer(state: BodyPartsState, action: Action<ChooseBodyPartPayload>): BodyPartsState {
	return {
		...state,
		chosenBodyPart: {
			id: action.payload!.bodyPartId
		}
	};
}

function setChosenBodyPartNameReducer(
	state: BodyPartsState,
	action: Action<SetChosenBodyPartNamePayload>
): BodyPartsState {
	return {
		...state,
		chosenBodyPart: {
			...state.chosenBodyPart,
			name: action.payload.name
		}
	};
}

export default handleActions<BodyPartsState, any>({
	[ActionTypes.SetGender]: setGenderReducer,
	[ActionTypes.SwitchPosition]: switchPositionReducer,
	[ActionTypes.ChooseBodyPart]: chooseBodyPartReducer,
	[ActionTypes.SetChosenBodyPartName]: setChosenBodyPartNameReducer
}, initialState);
