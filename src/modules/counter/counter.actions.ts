import { createAction } from 'redux-actions';
import { ActionTypes, SetCounterPayload } from './';

export const counterIncAction = createAction(ActionTypes.Inc);
export const counterDecAction = createAction(ActionTypes.Dec);
export const resetAction = createAction(ActionTypes.Reset);
export const setCounterAction = createAction<SetCounterPayload>(ActionTypes.SetCounter);
