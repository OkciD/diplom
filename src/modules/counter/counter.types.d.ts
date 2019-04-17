export default interface CounterState {
	counter: number | undefined;
	operationsLog: string[];
}

export interface SetCounterPayload {
	counter: number;
}
