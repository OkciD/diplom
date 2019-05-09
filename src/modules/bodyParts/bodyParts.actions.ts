import { createAction } from 'redux-actions';
import { ActionTypes, SelectBodyPartPayload, SetGenderPayload } from './';

export const setGenderAction = createAction<SetGenderPayload>(ActionTypes.SetGender);
export const switchPositionAction = createAction(ActionTypes.SwitchPosition);
export const selectBodyPartAction = createAction<SelectBodyPartPayload>(ActionTypes.SelectBodyPart);
export const unSelectBodyPartAction = createAction(ActionTypes.UnSelectBodyPart);
