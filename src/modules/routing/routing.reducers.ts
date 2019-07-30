import { Action, handleActions } from 'redux-actions';
import { ActionTypes, initialState, RoutingState, RoutePayload } from './';

function routeReducer(state: RoutingState, action: Action<RoutePayload>): RoutingState {
	const { stack } = action.payload!;

	return {
		stack,
		currentRoute: stack.slice(-1)[0]
	};
}

export default handleActions({
	[ActionTypes.Route]: routeReducer
}, initialState);
