import { createAction } from 'redux-actions';
import { ActionTypes, SetStackPayload } from './';

export const setStackAction = createAction<SetStackPayload>(ActionTypes.SetStack);
