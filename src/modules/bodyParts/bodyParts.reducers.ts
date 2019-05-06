import { ActionTypes, initialState, BodyPartsState, SetGenderPayload, SelectBodyPartPayload } from './';
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

function selectBodyPartReducer(state: BodyPartsState, action: Action<SelectBodyPartPayload>): BodyPartsState {
	return {
		...state,
		selectedBodyPartId: action.payload!.bodyPartId
	};
}

function unselectBodyPartReducer(state: BodyPartsState): BodyPartsState {
	return {
		...state,
		selectedBodyPartId: null
	};
}

export default handleActions<BodyPartsState, any>({
	[ActionTypes.SetGender]: setGenderReducer,
	[ActionTypes.SwitchPosition]: switchPositionReducer,
	[ActionTypes.SelectBodyPart]: selectBodyPartReducer,
	[ActionTypes.UnSelectBodyPart]: unselectBodyPartReducer
}, initialState);
