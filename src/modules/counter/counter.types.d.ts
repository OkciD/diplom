export default interface CounterState {
	counter: number;
	operationsLog: string[];
}

export interface SetCounterPayload {
	counter: number;
}
