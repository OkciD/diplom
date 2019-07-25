export { default as BodyPartsState, SelectBodyPartPayload, SetGenderPayload } from './bodyParts.types.d';
export { ActionTypes, initialState, MaleFrontBodyParts, MaleBackBodyParts } from './bodyParts.constants';
export {
	setGenderAction,
	switchPositionAction,
	selectBodyPartAction,
	unSelectBodyPartAction
} from './bodyParts.actions';
export { default as bodyPartsReducer } from './bodyParts.reducers';
