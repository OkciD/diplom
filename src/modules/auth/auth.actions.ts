import { createAction } from 'redux-actions';
import { ActionTypes, SetErrorPayload, SetFieldPayload } from './';

export const setFieldAction = createAction<SetFieldPayload>(ActionTypes.SetField);
export const setErrorAction = createAction<SetErrorPayload>(ActionTypes.SetError);
