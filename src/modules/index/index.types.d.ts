import { AuthState } from '../auth';
import { BodyPartsState } from '../bodyParts';
import { RoutingState } from '../routing';
import { SymptomsState } from '../symptoms';

export default interface StoreState {
	auth: AuthState;
	bodyParts: BodyPartsState;
	routing: RoutingState;
	symptoms: SymptomsState;
}
