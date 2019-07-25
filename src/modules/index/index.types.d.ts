import { AuthState } from '../auth';
import { BodyPartsState } from '../bodyParts';
import { RoutingState } from '../routing';

export default interface StoreState {
	auth: AuthState;
	bodyParts: BodyPartsState;
	routing: RoutingState;
}
