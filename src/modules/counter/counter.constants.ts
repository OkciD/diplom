import { CounterState } from './';

export enum ActionTypes {
	Inc = 'COUNTER/INC',
	Dec = 'COUNTER/DEC',
	Reset = 'COUNTER/RESET',
	SetCounter = 'COUNTER/SET_COUNTER'
}

export const initialState: CounterState = {
	counter: undefined,
	operationsLog: []
};
