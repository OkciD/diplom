import { createAction } from 'redux-actions';
import { ActionTypes, SetSymptomsPayload } from './';

export const setSymptomsAction = createAction<SetSymptomsPayload>(ActionTypes.SetSymptoms);
