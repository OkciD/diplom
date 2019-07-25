export { default as BodyPartsState, ChooseBodyPartPayload, SetGenderPayload } from './bodyParts.types.d';
export { ActionTypes, initialState, MaleFrontBodyParts, MaleBackBodyParts } from './bodyParts.constants';
export {
	setGenderAction,
	switchPositionAction,
	selectBodyPartAction
} from './bodyParts.actions';
export { default as bodyPartsReducer } from './bodyParts.reducers';
