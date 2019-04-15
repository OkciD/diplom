import { CounterState } from '../counter';
import { AuthState } from '../auth';

export default interface StoreState {
	counter: CounterState;
	auth: AuthState;
}
