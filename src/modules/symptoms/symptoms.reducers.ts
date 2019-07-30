import { Action, handleActions } from 'redux-actions';
import { ActionTypes, initialState, SetSymptomsPayload, SymptomsState } from './';

function setSymptomsReducer(state: SymptomsState, action: Action<SetSymptomsPayload>): SymptomsState {
	return {
		...state,
		symptomsForChosenBodyPart: action.payload!.symptoms
	};
}

export default handleActions<SymptomsState, any>({
	[ActionTypes.SetSymptoms]: setSymptomsReducer
}, initialState);
