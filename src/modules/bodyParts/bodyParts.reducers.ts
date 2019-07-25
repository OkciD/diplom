import { ActionTypes, initialState, BodyPartsState, SetGenderPayload, ChooseBodyPartPayload } from './';
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
		chosenBodyPartId: action.payload!.bodyPartId
	};
}

export default handleActions<BodyPartsState, any>({
	[ActionTypes.SetGender]: setGenderReducer,
	[ActionTypes.SwitchPosition]: switchPositionReducer,
	[ActionTypes.ChooseBodyPart]: chooseBodyPartReducer
}, initialState);
