import { CounterState } from '../counter';
import { AuthState } from '../auth';
import { BodyPartsState } from '../bodyParts';

export default interface StoreState {
	counter: CounterState;
	auth: AuthState;
	bodyParts: BodyPartsState;
}
