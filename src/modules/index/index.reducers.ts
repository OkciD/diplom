import { combineReducers } from 'redux';
import { authReducer } from '../auth';
import { bodyPartsReducer } from '../bodyParts';
import { RoutingReducer } from '../routing';

export default combineReducers<any>({
	auth: authReducer,
	bodyParts: bodyPartsReducer,
	routing: RoutingReducer
});
