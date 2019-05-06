import { ActionTypes, AuthState, initialState, SetErrorPayload, SetFieldPayload } from './';
import { Action, handleActions } from 'redux-actions';

function setFieldReducer(state: AuthState, action: Action<SetFieldPayload>): AuthState {
	return {
		...state,
		...action.payload
	};
}

function setErrorReducer(state: AuthState, action: Action<SetErrorPayload>): AuthState {
	return {
		...state,
		error: action.payload!.error
	};
}

export default handleActions<AuthState, any>(
	{
		[ActionTypes.SetField]: setFieldReducer,
		[ActionTypes.SetError]: setErrorReducer
	},
	initialState
);
