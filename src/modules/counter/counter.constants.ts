import { CounterState } from './';

export const enum ActionTypes {
	Inc = 'COUNTER/INC',
	Dec = 'COUNTER/DEC',
	Reset = 'COUNTER/RESET',
	SetCounter = 'COUNTER/SET_COUNTER'
}

export const initialState: CounterState = {
	counter: 0,
	operationsLog: []
};
