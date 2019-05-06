export { default as BodyPartsState, SelectBodyPartPayload, SetGenderPayload } from './bodyParts.types';
export { ActionTypes, initialState } from './bodyParts.constants';
export {
	setGenderAction,
	switchPositionAction,
	selectBodyPartAction,
	unSelectBodyPartAction
} from './bodyParts.actions';
export { default as bodyPartsReducer } from './bodyParts.reducers';
