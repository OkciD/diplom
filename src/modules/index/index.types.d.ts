import { CounterState } from '../counter';
import { BodyPartsState } from '../bodyParts';

export default interface StoreState {
	counter: CounterState;
	bodyParts: BodyPartsState;
}
