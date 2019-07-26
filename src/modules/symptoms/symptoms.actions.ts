import { createAction } from 'redux-actions';
import { ActionTypes, LoadSymptomsPayload } from './';

export const loadSymptomsAction = createAction<LoadSymptomsPayload>(ActionTypes.LoadSymptoms);
