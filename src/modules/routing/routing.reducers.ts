import { Action, handleActions } from 'redux-actions';
import { ActionTypes, initialState, RoutingState, SetStackPayload } from './';

function setStackReducer(state: RoutingState, action: Action<SetStackPayload>): RoutingState {
	const { stack } = action.payload!;

	return {
		stack,
		currentRoute: stack.slice(-1)[0]
	};
}

export default handleActions({
	[ActionTypes.SetStack]: setStackReducer
}, initialState);
