import { ActionTypes, CounterState, initialState } from './';
import { handleActions } from 'redux-actions';

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
	return initialState;
}

export default handleActions<CounterState>(
	{
		[ActionTypes.Inc]: incReducer,
		[ActionTypes.Dec]: decReducer,
		[ActionTypes.Reset]: resetReducer
	},
	initialState
);
