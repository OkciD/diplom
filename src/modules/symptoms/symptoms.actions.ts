import { createAction } from 'redux-actions';
import { ActionTypes, LoadSymptomsPayload, SetSymptomsPayload } from './';

export const loadSymptomsAction = createAction<LoadSymptomsPayload>(ActionTypes.LoadSymptoms);
export const setSymptomsAction = createAction<SetSymptomsPayload>(ActionTypes.SetSymptoms);
