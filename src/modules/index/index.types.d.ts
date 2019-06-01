import { CounterState } from '../counter';
import { AuthState } from '../auth';
import { BodyPartsState } from '../bodyParts';
import { RoutingState } from '../routing';

export default interface StoreState {
	counter: CounterState;
	auth: AuthState;
	bodyParts: BodyPartsState;
	routing: RoutingState;
}
