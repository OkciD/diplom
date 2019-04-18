import { ActionTypes, CounterState, initialState, SetCounterPayload } from './';
import { Action, handleActions } from 'redux-actions';

function incReducer(state: CounterState): CounterState {
	return {
		...state,
		operationsLog: [
			...state.operationsLog,
			'inc'
		]
	};
}

function decReducer(state: CounterState): CounterState {
	return {
		...state,
		operationsLog: [
			...state.operationsLog,
			'dec'
		]
	};
}

function resetReducer(state: CounterState): CounterState {
	return {
		...state,
		operationsLog: []
	};
}

function setCounterReducer(state: CounterState, action: Action<SetCounterPayload>): CounterState {
	return {
		...state,
		counter: action.payload!.counter
	};
}

export default handleActions<CounterState, any>(
	{
		[ActionTypes.Inc]: incReducer,
		[ActionTypes.Dec]: decReducer,
		[ActionTypes.Reset]: resetReducer,
		[ActionTypes.SetCounter]: setCounterReducer
	},
	initialState
);
